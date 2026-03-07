import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HeaderAdmin() {
  const navigate = useNavigate();
  return (
    <header className="p-4">
      <div className="max-w-[1400px] ml-auto mr-auto w-[100%] flex items-center justify-between">
        <h2
          onClick={() => navigate("/admin-dashboard")}
          className="cursor-pointer text-[20px] border-[3px] border-[#b4b4b4] p-1 rounded-2xl select-none"
        >
          Admin Dashboard
        </h2>
        <Link
          to="/"
          className="text-[20px] border-[3px] border-[#b4b4b4] p-1 rounded-2xl"
        >
          Asosiy sahifa
        </Link>
      </div>
    </header>
  );
}

export default HeaderAdmin;
