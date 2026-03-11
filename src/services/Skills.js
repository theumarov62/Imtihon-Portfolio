import api from "../api/axios";

const Skills = {
  getSkills: () => {
    return api.get("/api/skills/");
  },
  getSkillsId: (id) => {
    return api.get(`/api/skill/${id}`);
  },
  postSkills: (id) => {
    return api.put(`/api/skills/${id}`);
  },
  putSkillsPartial: (id) => {
    return api.patch(`/api/skills/${id}`);
  },
  postSkills: (data) => {
    return api.post("/api/skills/", data);
  },
};

export default Skills;
