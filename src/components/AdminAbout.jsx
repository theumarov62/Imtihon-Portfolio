import { useEffect, useState } from "react";
import Header from "../layouts/admin/HeaderAdmin";
import About from "../services/About";
function AdminAbout() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [aboutOpenModal, setAboutOpenModal] = useState(false);

  const [about, setAbout] = useState([]);

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

  return (
    <>
      <Header />
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

          <div>
            {about.map((item) => {
              return (
                <div key={item.id}>
                  <h4>{item.name}</h4>
                  <p>{item.bio}</p>
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
