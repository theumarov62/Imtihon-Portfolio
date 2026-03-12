import React, { useEffect, useState } from "react";
import { StaticCards } from "../../data";
import Skills from "../../services/Skills";
function SkillsPublic() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function GetSkill() {
      Skills.getSkills().then((res) => {
        return setSkills(res.data);
      });
    }
    GetSkill();
  }, []);
  return (
    <section className="bg-[#1A1A2E] pt-24 pb-24">
      <div className="max-w-320 w-[100%] mx-auto ">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col gap-16">
            <h2 className="font-normal text-[48px] leading-12 text-center text-white">
              Skills & Expertise
            </h2>
            <div>
              {/* Card */}
              <div className="flex flex-wrap gap-6">
                {StaticCards.map((item, i) => {
                  return (
                    <div
                      key={item.id}
                      className="w-102.5 rounded-2xl bg-[#0F0F1E] flex flex-col p-8 gap-6"
                    >
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
          <div className="w-7xl rounded-2xl gap-8 flex flex-col items-center justify-center p-12 bg-[#0F0F1E]">
            <h2 className="font-normal text-[24px] leading-8 text-center text-white">
              Technical Proficiency
            </h2>

            <div className="flex-wrap flex items-center text-left w-[100%] bg-[#0F0F1E] gap-8">
              {skills.map((item) => {
                return (
                  <div key={item.id} className="w-xl h-11 flex flex-col">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="font-normal text-4 leading-6 text-[#D1D5DC]">
                          {item.name}
                        </p>
                        <span className="font-normal text-4 leading-6 text-[#7C3AED]">
                          {item.percentage}%
                        </span>
                      </div>
                      {/* bg */}
                      <div className="flex flex-col relative">
                        <div className="w-xl h-3 bg-[#1A1A2E] rounded-full absolute"></div>

                        {/* bg percentage */}
                        <div
                          className="bg-gradient-to-r from-[#7C3AED] to-[#00D8FF] h-3 rounded-full z-3"
                          style={{
                            width: item.percentage + "%",
                          }}
                        ></div>
                      </div>
                    </div>
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
