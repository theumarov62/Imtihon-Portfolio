import React from "react";

function Main() {
  return (
    <>
      <main>
        <section className="bg-gradient-to-r from-[#1A1A2E] to-[#0F0F1E] pt-[155px]">
          <div className="max-w-[1280px] ml-auto mr-auto w-[100%] flex gap-[100px] items-center">
            {/* Hello Abdulloh */}
            <div>
              <div className="select-none w-[200px] h-[42px] rounded-[16px] border-[1px] border-[#7C3AED4D] mb-[32px] flex items-center justify-center bg-[#7C3AED1A]10">
                <h3 className="font-normal text-[16px] leading-[24px] text-[#7C3AED] cursor-pointer">
                  👋 Hello, I'm Abdulloh
                </h3>
              </div>
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[13px]">
                  <h1 className="font-normal text-[72px] leading-[72px] select-none">
                    Frontend <br />
                    Developer
                  </h1>
                  <p className="font-normal text-[24px] leading-[32px] text-[#D1D5DC]">
                    I build interactive and responsive web experiences.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="github.com/theumarov62"
                    target="_blank"
                    className="w-[161px] h-[48px] rounded-[16px] text-[14px] gap-2 leading-[20px] text-[#fff] tracking-normal flex items-center justify-center font-medium bg-[#7C3AED] border-[#7C3AED] transition-all border-[2px] duration-300 hover:bg-[#fff]  hover:border-[#fff] hover:text-[#7C3AED]"
                  >
                    View My Work
                  </a>

                  <a
                    href="#"
                    className="w-[150px] h-[52px]  rounded-[16px] border-[2px] bg-white border-[#7C3AED] text-[#7C3AED] flex items-center justify-center gap-2 transition-all duration-300 hover:text-[#fff] border-[#7C3AED] hover:bg-[#7C3AED]"
                  >
                    Contact Me
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src="/GithubIcon.svg"
                    alt="GitHub Icon"
                    className="w-[24px] cursor-pointer"
                  />
                  <img
                    src="/TelegramIcon.svg"
                    alt="Telegram Icon"
                    className="w-[24px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Section Right */}
            <img
              src="/img-none.png"
              alt="None Img"
              className="w-[506px] h-[504px] rounded-[50%] border-[4px] border-[#7C3AED4D]/30 shadow-[0px_25px_50px_-12px_rgba(124,58,237,0.2)]"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
