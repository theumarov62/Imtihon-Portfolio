import { useEffect, useState } from "react";
import Header from "../layouts/admin/HeaderAdmin";
import About from "../services/About";
function AdminAbout() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [aboutOpenModal, setAboutOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [about, setAbout] = useState([]);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const [deletedId, setDeletedId] = useState();
  const data = {
    name: name,
    role: role,
    bio: bio,
  };

  function handleSubmit(e) {
    e.preventDefault();
    About.postAbout(data);
    setName("");
    setBio("");
    setRole("");
    console.log(data);
    setAboutOpenModal(false);
  }

  useEffect(() => {
    async function n() {
      const res = await About.getAbout();
      setAbout(res.data);
    }

    n();
  }, []);

  function AboutDelete(id) {
    About.deleteAboutId(id)
      .then(() => {
        setAbout((prev) => prev.filter((item) => item.id !== id));
        setDeleteModal(false);
      })
      .catch((error) => {
        console.error("O'chirilmadi", error);
      });
  }
  return (
    <>
      <Header />
      {deleteModal && (
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
                onClick={() => setDeleteModal(false)}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md"
              >
                Bekor qilish
              </button>
              <button
                onClick={() => AboutDelete(deletedId)}
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-medium py-2 px-4 rounded-md"
              >
                O‘chirish
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="p-10">
        {aboutOpenModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* Modal box */}
            <div className="bg-[#0F0F1E] rounded-2xl shadow-lg p-8 w-full max-w-lg relative">
              {/* Close button */}
              <button
                onClick={() => setAboutOpenModal(false)}
                className="absolute top-4 right-4 cursor-pointer text-white text-xl font-bold hover:text-purple-500"
              >
                &times;
              </button>

              <h2 className="text-2xl text-white mb-6 text-center">
                About qo'shish
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="About nomini kiriting"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  className="input"
                  placeholder="About ro'lini kiriting"
                  onChange={(e) => setRole(e.target.value)}
                />

                <textarea
                  className="input resize-none w-full h-24 p-2"
                  placeholder="About biosini kiriting"
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>

                <button type="submit" className="btn btn-primary mt-2">
                  About qo'shish
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="btn-primary btn"
            onClick={() => setAboutOpenModal(true)}
          >
            About qo'shish
          </button>
        </div>
        <div className="mt-10">
          <h2 className="text-center text-[30px]">Aboutlar</h2>

          <div className="flex flex-wrap gap-4 items-center justify-between">
            {about.map((item) => {
              return (
                <div key={item.id}>
                  <div className="w-[300px] h-[164px] rounded-[16px] gap-5 flex flex-col bg-[#1A1A2E] pt-[24px] pb-[24px] pl-[24px]">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-400 text-[16px] leading-[24px] text-[#fff]">
                        {item.name}
                      </h4>
                      <p className="font-normal text-[14px] leading-[20px] text-[#99A1AF]">
                        {item.bio}
                      </p>
                    </div>

                    {/* Btns */}
                    <div className="flex justify-end pr-4">
                      <button
                        className="btn btn-error"
                        onClick={() => {
                          setDeleteModal(true);
                          setSelectedProjectTitle(item.name);
                          setDeletedId(item.id);
                        }}
                      >
                        O'chirish
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminAbout;
