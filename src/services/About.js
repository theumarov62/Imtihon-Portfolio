import api from "../api/axios";
const About = {
  getAbout: () => {
    api.get("/about/");
  },
  getAboutId: (id) => {
    api.get(`/about/${id}`);
  },
  postAbout: (data) => {
    api.post("/about/", data);
  },
  putAboutId: (id) => {
    api.put(`/about/${id}`);
  },
  patchAboutPartialId: (id) => {
    api.patch(`/about/${id}`);
  },
};

export default About;
