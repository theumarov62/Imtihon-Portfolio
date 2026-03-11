import React, { useEffect, useState } from "react";
import { StaticCards } from "../../data";
import Skills from "../../services/Skills";
function SkillsPublic() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    Skills.getSkills();
  }, []);
  return (
    <section className="bg-[#1A1A2E] pt-24 pb-24">
      <div className="max-w-320 w-[100%] mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-16">
            <h2 className="font-normal text-[48px] leading-12 text-center text-white">
              Skills & Expertise
            </h2>
            <div>
              {/* Card */}
              <div className="flex flex-wrap gap">
                {StaticCards.map((item, i) => {
                  return (
                    <div className="w-102.5 rounded-2xl bg-[#0F0F1E] flex flex-col p-8 gap-6">
                      <div
                        className="w-14 h-14 rounded-[14px] flex items-center justify-center"
                        style={{
                          backgroundColor: [2, 4, 6].includes(item.id)
                            ? "#00D8FF20"
                            : "#7C3AED20",
                        }}
                      >
                        <img
                          src={item.src}
                          alt="Responsive Design Img"
                          className="w-7 h-7"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="font-normal text-[20px] leading-7 text-white">
                          {item.name}
                        </h3>
                        <p className="font-normal text-4 leading-6 text-[#99A1AF]">
                          {item.comment}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-320 rounded-2xl flex flex-col items-center justify-center p-12">
            <h2 className="font-normal text-6 leading-8 text-center text-white">
              Technical Proficiency
            </h2>

            <div className="flex-wrap flex items-center text-left">
              {skills.map((item) => {
                return (
                  <div key={item.id}>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPublic;
