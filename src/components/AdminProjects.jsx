import { useEffect, useState } from "react";
import ProjectsAPI from "../services/ProjectsAPI";
import HeaderAdmin from "../layouts/admin/HeaderAdmin";
function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editProject, setEditProject] = useState(null);

  // Add Project
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [technoliges, setTechnologies] = useState("");
  const [demo, setDemo] = useState("");
  const [repo, setRepo] = useState("");
  const [order, setOrder] = useState("");
  const [addProject, setAddProject] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Cursor Move
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (e.clientX - centerX) / 20;
    const deltaY = (e.clientY - centerY) / 20;
    setOffset({ x: deltaX, y: deltaY });
  };

  // Add project function
  function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const data = {
      title: name,
      description: description,
      technologies: technoliges,
      demo_link: demo,
      repo_link: repo,
      order: parseInt(order) || 0,
    };

    console.log("Sending data:", data);

    ProjectsAPI.postProject(data)
      .then((res) => {
        setAddProject(false);
        setName("");
        setDescription("");
        setTechnologies("");
        setDemo("");
        setRepo("");
        setOrder("");
      })
      .catch((err) => {});
  }

  // Delete project function
  function handleDelete(id) {
    ProjectsAPI.deleteProjectId(id)
      .then(() => {
        setProjects((prevProjects) => {
          prevProjects.filter((project) => project.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Delete Modal
  function handleCancelDelete() {
    setDeleteModalOpen(false);
  }

  function DeleteProject(id, title) {
    setDeleteModalOpen(true);
    setDeleteId(id);
    setSelectedProjectTitle(title);
  }

  function DeleteProjectId(id) {
    handleDelete(id);
    setDeleteModalOpen(false);
  }

  // Edite
  function Edit(item, title, id) {
    setEditProject(item);
    setEditModalOpen(true);
    setSelectedProjectTitle(title);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (!editProject) return;

    const orginalData = {
      title: editProject.title,
      description: editProject.description,
      technologies: editProject.technologies,
      demo_link: editProject.demo_link,
      repo_link: editProject.repo_link,
      order: editProject.order,
    };
    const dataToUpdate = {
      title: editProject.title,
      description: editProject.description,
      technologies: editProject.technologies,
      demo_link: editProject.demo_link,
      repo_link: editProject.repo_link,
      order: editProject.order,
    };

    const original = orginalData;

    const allSame =
      original.title === dataToUpdate.title &&
      original.description === dataToUpdate.description &&
      original.technologies === dataToUpdate.technologies &&
      original.demo_link === dataToUpdate.demo_link &&
      original.repo_link === dataToUpdate.repo_link &&
      original.order === dataToUpdate.order;

    if (allSame) {
      ProjectsAPI.putProjectId(editProject.id, dataToUpdate).then(() =>
        console.log("Loyiha to'liq yangilandi")
      );
    } else {
      ProjectsAPI.patchProjectPartialId(editProject.id, dataToUpdate).then(() =>
        console.log("Loyiha qisman yangilandi!!")
      );
    }
    setEditModalOpen(false);
  }

  useEffect(() => {
    ProjectsAPI.getProject()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-center text-[30px] mt-50 select-none">
          Yuklanmoqda . . .
        </h2>
      </div>
    );
  }
  return (
    <>
      <HeaderAdmin />

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#fff] dark:bg-gray-800 w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setEditModalOpen(false)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              " {selectedProjectTitle} " ushbu loyihani tahrirlayabsiz!
            </h2>

            <form onSubmit={handleEditSubmit}>
              <div className="flex items-center flex-wrap justify-center gap-4">
                {/* ✅ value va onChange qo'shildi */}
                <input
                  type="text"
                  className="input"
                  placeholder="Loyihangiz Nomi"
                  value={editProject?.title || ""}
                  onChange={(e) =>
                    setEditProject({ ...editProject, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Texnologiyalar"
                  className="input"
                  value={editProject?.technologies || ""}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      technologies: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Demo Link"
                  className="input"
                  value={editProject?.demo_link || ""}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      demo_link: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Repo Link"
                  className="input"
                  value={editProject?.repo_link || ""}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      repo_link: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Order"
                  className="input"
                  value={editProject?.order || ""}
                  onChange={(e) =>
                    setEditProject({ ...editProject, order: e.target.value })
                  }
                />
                <textarea
                  placeholder="Loyihangiz haqida izoh"
                  className="input pt-2 mt-4 resize-none h-[130px]"
                  value={editProject?.description || ""}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end items-center">
                <button className="btn-info btn mt-4">Tasdiqlash</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 sm:p-8 relative">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
              Loyihani o‘chirishni tasdiqlaysizmi?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              "{selectedProjectTitle}" loyihasi o‘chiriladi. Bu amalni qaytarib
              bo‘lmaydi.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md"
              >
                Bekor qilish
              </button>
              <button
                onClick={() => DeleteProjectId(deleteId)}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-medium py-2 px-4 rounded-md"
              >
                O‘chirish
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="p-10">
        {/* Add Project Modal */}
        {addProject && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 sm:p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setAddProject(false)}
                className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 text-lg font-bold"
              >
                &times;
              </button>

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                Yangi Loyiha Qo‘shish
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Loyiha nomini kiriting"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Texnalogiyalar haqida izoh kiriting"
                  onChange={(e) => setTechnologies(e.target.value)}
                />
                <input
                  type="text"
                  className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Demo linkni kiriting"
                  onChange={(e) => setDemo(e.target.value)}
                />
                <input
                  type="text"
                  className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Repo linkni kiriting"
                  onChange={(e) => setRepo(e.target.value)}
                />
                <input
                  type="text"
                  className="input border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Ketma ketlik raqamini kiriting(Order)"
                  onChange={(e) => setOrder(e.target.value)}
                />
                <textarea
                  className="input border border-gray-300 rounded-md px-3 py-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Loyiha haqida izoh kiriting"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors w-full"
                >
                  {submitting ? "Kutilmoqda . ." : "Tasdiqlash"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Button to open modal */}
        <div className="flex items-center justify-end mt-4">
          <button
            className="btn btn-primary font-normal"
            onClick={() => setAddProject(true)}
          >
            Project qo'shish
          </button>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer"
                onMouseMove={handleMouseMove}
              >
                <div
                  className="card w-96 card-lg shadow-sm p-4 border-[2px] border-[#fff]"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                  }}
                >
                  <div className="card-body">
                    <h2 className="card-title">Loyiha: {item.title}</h2>
                    <p>
                      <span className="font-bold text-[16px]">Izoh:</span>{" "}
                      {item.description}
                    </p>
                    <p>
                      <span className="font-bold text-[16px]">
                        Texnologiyalar:
                      </span>{" "}
                      {item.technologies}
                    </p>
                  </div>

                  <div className=" items-end card-actions flex-col">
                    <div className="flex items-center gap-2">
                      <a
                        href={item.demo_link}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Demo
                      </a>

                      <a
                        href={item.repo_link}
                        target="_blank"
                        className="btn btn-error"
                      >
                        Repo
                      </a>
                    </div>

                    <div className="flex items-center gap-4 justify-end mt-2">
                      <button
                        className="btn btn-error"
                        onClick={() => DeleteProject(item.id, item.title)}
                      >
                        O'chirish
                      </button>
                      <button
                        className="btn btn-accent"
                        onClick={() => Edit(item, item.title)}
                      >
                        Tahrirlash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AdminProjects;
