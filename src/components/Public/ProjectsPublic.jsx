import { forwardRef } from "react";
import { StaticProjects } from "../../data";
import { Link } from "react-router-dom";

const ProjectsPublic = forwardRef((props, ref) => {
  return (
    <section className="bg-[#0F0F1E] pt-24 pb-20 max-xa:p-4" ref={ref}>
      <div className="max-w-7xl w-full mx-auto">
        <div>
          <h2 className="text-3xl mb-4 relative text-[#7C3AED] mt-2">
            <Link to={"/projects"}>
              Batafsil <span className="absolute top-0.5 left-30">></span>
            </Link>
          </h2>
        </div>
        {/* Projects */}
        <div className="flex gap-8 flex-wrap items-center justify-center ">
          {StaticProjects.map((item) => {
            return (
              <div
                key={item.id}
                className="w-156 rounded-[14px] max-xa:w-full bg-[#1A1A2E] flex flex-col gap-6 justify-center"
              >
                <img src={item.src} alt="Img" className="rounded-t-[14px]" />

                {/* Project Information */}
                <div className="flex flex-col gap-4 text-left pb-6 pt-6 pl-6 pr-6">
                  <h2 className="font-normal text-[24px] leading-8 max-xq:text-[20px] max-xq:leading-7">
                    {item.title}
                  </h2>
                  <p className="font-normal text-[16px] leading-6 max-xq:text-[14px] max-xq:leading-5 text-[#99A1AF]">
                    {item.comment}
                  </p>

                  {/* Project technologies */}
                  <div className="flex gap-2">
                    {item.technologies.map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#7C3AED1A] max-xq:text-[12px] max-xq:leading-4 rounded-lg inline-flex pl-2 pr-2 cursor-pointer select-none border pt-0.5 pb-0.5 border-[#7C3AED1A]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* Repozistory */}
                  <div className="flex gap-4 items-center justify-center max-xq:flex-col">
                    <button className="w-70 max-xq:w-full h-9 hover:opacity-80 transition-all duration-300 rounded-[14px] bg-[#7C3AED] flex items-center gap-4 justify-center cursor-pointer">
                      <span>
                        <img
                          src="/skills/live-demo-icon.svg"
                          alt="Icon"
                          className="w-4 h-4"
                        />
                      </span>
                      Live Demo
                    </button>

                    <button className="w-70 max-xq:w-full border border-[#7C3AED] text-[#7C3AED] h-9 hover:opacity-80 transition-all duration-300 rounded-[14px] bg-[#FFFFFF] flex items-center gap-4 justify-center cursor-pointer font-medium text-[14px] leading-5">
                      <span>
                        <img
                          src="/skills/github.svg"
                          alt="Icon"
                          className="w-4 h-4"
                        />
                      </span>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ProjectsPublic;
