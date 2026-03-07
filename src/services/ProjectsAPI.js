import api from "../api/axios";

const ProjectsAPI = {
  getProject: () => {
    return api.get("/api/projects/");
  },

  getProjectId: (id) => {
    return api.get(`/api//projects/${id}`);
  },

  postProject: (data) => {
    return api.post("/api/projects/", data);
  },

  putProjectId: (id, data) => {
    return api.put(`/api/projects/${id}/`, data);
  },

  patchProjectPartialId: (id, data) => {
    return api.patch(`/api/projects/${id}/`, data);
  },

  deleteProjectId: (id) => {
    return api.delete(`/api/projects/${id}/`);
  },
};

export default ProjectsAPI;
