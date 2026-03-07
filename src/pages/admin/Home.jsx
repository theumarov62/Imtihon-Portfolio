import AdminLayouts from "../../layouts/admin/AdminLayouts";
import FooterAdmin from "../../layouts/admin/FooterAdmin";
import HeaderAdmin from "../../layouts/admin/HeaderAdmin";

function Home() {
  return (
    <>
      <HeaderAdmin />
      <AdminLayouts />
      <FooterAdmin />
    </>
  );
}

export default Home;
