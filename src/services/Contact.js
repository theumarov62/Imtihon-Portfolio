import api from "../api/axios";
const Contact = {
  getContact: () => {
    api.get("/contact/");
  },

  getContactId: (id) => {
    api.get(`/contact/${id}`);
  },
  postContact: (data) => {
    api.post("/contact/", data);
  },
  putContactId: (id) => {
    api.put(`/contact/${id}`);
  },

  patchContactPartialId: (id) => {
    api.patch(`/contact/${id}`);
  },
};
export default Contact;
