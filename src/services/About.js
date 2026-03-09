import api from "../api/axios";
const About = {
  getAbout: () => {
    return api.get("/api/about/");
  },
  getAboutId: (id) => {
    return api.get(`/api/about/${id}`);
  },
  postAbout: (data) => {
    return api.post("/api/about/", data);
  },
  putAboutId: (id) => {
    return api.put(`/api/about/${id}`);
  },
  patchAboutPartialId: (id) => {
    return api.patch(`/api/about/${id}`);
  },
};

export default About;
