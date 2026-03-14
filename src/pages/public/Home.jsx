import { useEffect, useRef, useState } from "react";
import ProjectsAPI from "../../services/ProjectsAPI";
import Header from "../../components/Public/Header";
import Main from "../../components/Public/Main";
import AboutPublic from "../../components/Public/AboutPublic";
import SkillsPublic from "../../components/Public/SkillsPublic";
import ProjectsPublic from "../../components/Public/ProjectsPublic";
import Footer from "../../components/Public/Footer";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
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

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
      />

      <Main />

      <AboutPublic ref={aboutRef} />

      <SkillsPublic ref={skillsRef} />

      <ProjectsPublic ref={projectsRef} />

      <Footer />
    </>
  );
}

export default Home;
