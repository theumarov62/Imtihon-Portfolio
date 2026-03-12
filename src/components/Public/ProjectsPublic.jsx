import { StaticProjects } from "../../data";

function ProjectsPublic() {
  return (
    <section className="bg-[#0F0F1E] pt-24 pb-20 ">
      <div className="max-w-7xl w-full mx-auto">
        {/* Projects */}
        <div className="flex gap-8 flex-wrap items-center justify-center">
          {StaticProjects.map((item) => {
            return (
              <div
                key={item.id}
                className="w-156 rounded-[14px] bg-[#1A1A2E] flex flex-col gap-6 justify-center"
              >
                <img src={item.src} alt="Img" className="rounded-t-[14px]" />

                {/* Project Information */}
                <div className="flex flex-col gap-4 text-left pb-6 pt-6 pl-6">
                  <h2 className="font-normal text-[24px] leading-8">
                    {item.title}
                  </h2>
                  <p className="font-normal text-[16px] leading-6 text-[#99A1AF]">
                    {item.comment}
                  </p>

                  {/* Project technologies */}

                  <div className="flex gap-2">
                    {item.technologies.map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#7C3AED1A] rounded-lg inline-flex pl-2 pr-2 cursor-pointer select-none border pt-0.5 pb-0.5 border-[#7C3AED1A]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* Repozistory */}
                  <div className="flex gap-4 items-center justify-center">
                    <button className="w-70 h-9 hover:opacity-80 transition-all duration-300 rounded-[14px] bg-[#7C3AED] flex items-center gap-4 justify-center cursor-pointer">
                      <span>
                        <img
                          src="/skills/live-demo-icon.svg"
                          alt="Icon"
                          className="w-4 h-4"
                        />
                      </span>
                      Live Demo
                    </button>

                    <button className="w-70 border border-[#7C3AED] text-[#7C3AED] h-9 hover:opacity-80 transition-all duration-300 rounded-[14px] bg-[#FFFFFF] flex items-center gap-4 justify-center cursor-pointer font-medium text-[14px] leading-5">
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
}

export default ProjectsPublic;
