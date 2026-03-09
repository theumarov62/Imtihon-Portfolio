import { useEffect, useState } from "react";
import ProjectsAPI from "../../services/ProjectsAPI";
import Header from "../../components/Public/Header";
import Main from "../../components/Public/Main";
import AboutPublic from "../../components/Public/AboutPublic";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ProjectsAPI.getProject()
      .then((res) => {
        setProjects(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Cursor Move
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (e.clientX - centerX) / 20;
    const deltaY = (e.clientY - centerY) / 20;
    setOffset({ x: deltaX, y: deltaY });
  };
  if (loading) {
    return (
      <div>
        <h2 className="text-center mt-60 text-[30px]">Yuklanmoqda . . .</h2>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Main />
      <AboutPublic />

      <section>
        <div className="flex items-center justify-center">
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

export default Home;
