import { useEffect, useState } from "react";
import HeaderAdmin from "../layouts/admin/HeaderAdmin";
import Skills from "../services/Skills";
function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [skillModal, setSkillModal] = useState(false);

  // Add Skill Inputs state managment
  const [nameSkill, setNameSkill] = useState("");
  const [percentageSkill, setPercentageSkill] = useState("");
  const [orderSkill, setOrderSkill] = useState();

  const data = {
    name: nameSkill,
    percentage: percentageSkill,
    order: orderSkill,
  };

  useEffect(() => {
    Skills.getSkills().then((res) => {
      setSkills(res.data);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await Skills.postSkills(data);
    console.log(data);

    setNameSkill("");
    setPercentageSkill("");
    setOrderSkill();
  }

  function deleteSkills(id) {
    Skills.deleteSkill(id);
    console.log("ochirildi");
  }
  return (
    <>
      <HeaderAdmin />

      <section>
        <div className="max-w-350 w-[100%] mx-auto">
          {skillModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
              <div className="bg-white flex dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 sm:p-8 relative">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center w-full gap-4 items-center"
                >
                  <input
                    type="text"
                    placeholder="Texnologiya nomini kiriting"
                    className="input"
                    onChange={(e) => setNameSkill(e.target.value)}
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Qanchalik bilasiz?(percentage)"
                    onChange={(e) => setPercentageSkill(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Ixtiyoriy (order)"
                    className="input"
                    min={1}
                    max={2000}
                    onChange={(e) => setOrderSkill(e.target.value)}
                  />

                  <button className="btn btn-accent w-80" type="submit">
                    Tasdiqlash
                  </button>
                </form>
                <button
                  onClick={() => setSkillModal(false)}
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 text-lg font-bold"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
          {/* Add skill */}
          <div className="flex justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setSkillModal(true)}
            >
              Texnologiya qo'shish
            </button>
          </div>
          <div className="w-320 rounded-2xl flex flex-col items-center justify-center p-12">
            <h2 className="font-normal text-6 leading-8 text-center text-white">
              Technical Proficiency
            </h2>

            <div className="flex-wrap flex justify-between gap-4 items-center text-left">
              {skills.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full bg-white border-2 border-black "
                  >
                    <p className="text-black">Texnologiya nomi: {item.name}</p>
                    <p className="text-black">Foiz nomi: {item.percentage}</p>

                    <p className="text-black">Order: {item.order}</p>

                    <button
                      className="btn btn-error"
                      onClick={() => deleteSkills(item.id)}
                    >
                      O'chirish
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminSkills;
