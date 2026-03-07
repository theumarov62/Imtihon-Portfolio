import api from "../api/axios";

const Skills = {
  getSkills: () => {
    api.get("/skills/");
  },
  getSkillsId: (id) => {
    api.get(`/skill/${id}`);
  },
  postSkills: (id) => {
    api.put(`/skills/${id}`);
  },
  putSkillsPartial: (id) => {
    api.patch(`/skills/${id}`);
  },
  postSkills: (data) => {
    api.post("/skills/", data);
  },
  
};

export default Skills;
