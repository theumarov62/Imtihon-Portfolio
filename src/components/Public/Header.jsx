import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="pt-[16px] pb-[16px] bg-[#0F0F1E80] border-b-[#7C3AED33] border-b-[1px]">
      <div className="max-w-[1232px] w-[100%] ml-auto mr-auto flex items-center justify-between">
        <div>
          <h2
            onClick={() => navigate("/")}
            className="font-[400] text-[24px] leading-[32px] text-[#fff] cursor-pointer"
          >
            Abdulloh
          </h2>
        </div>
        <ul className="text-[#D1D5DC] flex items-center gap-[32px] ">
          <li className="font-normal text-[16px] leading-[24px] cursor-pointer">
            About
          </li>
          <li className="font-normal text-[16px] leading-[24px] cursor-pointer">
            Skills
          </li>
          <li className="font-normal text-[16px] leading-[24px] cursor-pointer">
            Projects
          </li>
          <li className="font-normal text-[16px] leading-[24px] cursor-pointer">
            Contact
          </li>
        </ul>
        <button className="w-[106px] h-10 rounded-[14px] pt-4 pb-4 flex items-center justify-center bg-[#7C3AED] font-[400] text-[16px] leading-[24px] text-[#fff] cursor-pointer">
          Hire Me
        </button>
      </div>
    </header>
  );
}

export default Header;
