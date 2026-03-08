import api from "../api/axios";
const About = {
  getAbout: () => {
    api.get("/api/about/");
  },
  getAboutId: (id) => {
    api.get(`/api/about/${id}`);
  },
  postAbout: (data) => {
    api.post("/api/about/", data);
  },
  putAboutId: (id) => {
    api.put(`/api/about/${id}`);
  },
  patchAboutPartialId: (id) => {
    api.patch(`/api/about/${id}`);
  },
};

export default About;
