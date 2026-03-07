import { useEffect, useState } from "react";
import ProjectsAPI from "../../services/ProjectsAPI";

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

  if (loading) {
    return (
      <div>
        <h2 className="text-center mt-60 text-[30px]">Yuklanmoqda . . .</h2>
      </div>
    );
  }
  return (
    <section>
      <div>
        {projects.map((i) => {
          return (
            <div key={i.id}>
              <p>{i.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
