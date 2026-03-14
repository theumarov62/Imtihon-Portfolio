import { useNavigate } from "react-router-dom";
function AdminLayouts() {
  const navigate = useNavigate();

  return (
    <section className="max-w-[1400px] w-[100%] ml-auto mr-auto p-4">
      <div>
        <h2 className="text-[35px] text-center mb-15">Admin Panel</h2>

        <div className="flex items-center justify-between flex-wrap gap-8">
          <div
            onClick={() => navigate("/admin-projects")}
            className="card bg-base-100 w-96 shadow-sm border-[white] border-[2px] cursor-pointer select-none"
          >
            <div className="card-body">
              <h2 className="card-title font-normal">Projectlar bo'limi</h2>
            </div>
          </div>

          <div
            onClick={() => navigate("/admin-about")}
            className="card bg-base-100 w-96 shadow-sm border-[white] border-[2px] cursor-pointer select-none"
          >
            <div className="card-body">
              <h2 className="card-title font-normal">Aboutlar bo'limi</h2>
            </div>
          </div>

          <div
            onClick={() => navigate("/admin-skills")}
            className="card bg-base-100 w-96 shadow-sm border-[white] border-[2px] cursor-pointer select-none"
          >
            <div className="card-body">
              <h2 className="card-title font-normal">Skills bo'limi</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLayouts;
