import Link from "daisyui/components/link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ scrollToAbout, scrollToSkills, scrollToProjects }) {
  const navigate = useNavigate();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.removeEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setInnerWidth(window.innerWidth);
    }, 200);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  });

  return (
    <header className="pt-4 pr-1 pl-1 pb-4 bg-[#0F0F1E80] border-b-[#7C3AED33] border-b-[1px] lg:pl-4 lg:pr-4 md:pl-2 md:pr-2 sm:pl-1 sm:pr-1">
      <div className="max-w-308 w-full ml-auto mr-auto flex items-center justify-between">
        <div>
          <h2
            onClick={() => navigate("/")}
            className="font-[400] text-[24px] leading-[32px] text-[#fff] cursor-pointer"
          >
            Abdulloh
          </h2>
        </div>
        {innerWidth > 640 ? (
          <ul className="text-[#D1D5DC] flex items-center gap-[32px]">
            <li
              onClick={scrollToAbout}
              className="font-normal text-[16px] leading-6 cursor-pointer relative  
                 after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                 after:h-0.75 after:w-0 after:bg-[#7C3AED] after:transition-all after:rounded-full
                 after:duration-300 hover:after:w-full"
            >
              About
            </li>
            <li
              onClick={scrollToSkills}
              className="font-normal text-[16px] leading-6 cursor-pointer relative  
                 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:rounded-full
                 after:h-0.75 after:w-0 after:bg-[#7C3AED] after:transition-all 
                 after:duration-300 hover:after:w-full"
            >
              Skills
            </li>
            <li
              onClick={scrollToProjects}
              className="font-normal text-[16px] leading-6 cursor-pointer relative  
                 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:rounded-full
                 after:h-0.75 after:w-0 after:bg-[#7C3AED] after:transition-all 
                 after:duration-300 hover:after:w-full"
            >
              Projects
            </li>
          </ul>
        ) : (
          <img
            src="/header/hamburger.svg"
            alt="Hamburger Menu"
            className="w-10"
            onClick={() => setHamburgerMenu(true)}
          />
        )}
        {innerWidth < 640 && hamburgerMenu && (
          <div className="absolute top-0 right-0 items-center justify-center bg-[#0F0F1E] shadow-lg rounded-md h-full w-full p-4 z-99 flex flex-col gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-7 h-7 absolute top-4 right-4"
              onClick={() => setHamburgerMenu(false)}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#fff"
              />
            </svg>

            <ul className="flex flex-col items-center justify-center gap-16">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li
                  key={item}
                  className="font-normal text-2xl leading-6 cursor-pointer relative  
                 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:rounded-full
                 after:h-0.75 after:w-0 after:bg-[#7C3AED] after:transition-all 
                 after:duration-300 hover:after:w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {innerWidth > 640 ? (
          <button className="w-[106px] h-10 rounded-[14px] pt-4 pb-4 flex items-center justify-center bg-[#7C3AED] font-[400] text-[16px] leading-[24px] text-[#fff] cursor-pointer">
            Hire Me
          </button>
        ) : (
          []
        )}
      </div>
    </header>
  );
}

export default Header;
