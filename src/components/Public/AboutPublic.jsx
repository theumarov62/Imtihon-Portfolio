import { useEffect, useState } from "react";
import About from "../../services/About";
function AboutPublic() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const techAbout = [
    { id: 1, name: "3+", comment: "Years Exp." },
    { id: 2, name: "50+", comment: "Projects" },
    { id: 3, name: "20+", comment: "Happy clients" },
  ];
  const techStack = [
    { id: 1, name: "HTML", img: "/about/html.svg", alt: "Img" },
    { id: 2, name: "Javascript", img: "/about/javascript.svg", alt: "Img" },
    { id: 3, name: "React", img: "/about/react.svg", alt: "Img" },
    { id: 4, name: "TypeScript", img: "/about/typescript.svg", alt: "Img" },
    { id: 5, name: "Tailwind", img: "/about/tailwind.svg", alt: "Img" },
    { id: 6, name: "Css", img: "/about/css.svg", alt: "Img" },
  ];
  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await About.getAbout();
        setAbout(res.data);
        console.log(res.data);
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  const icons = [
    "/about/clean-code.svg",
    "/about/ui-ux.svg",
    "/about/performance.svg",
    "/about/collaboration.svg",
  ];
  return (
    <section className="bg-[#0F0F1E] pt-[98px] pb-[96px]">
      <div className="max-w-[1280px] w-[100%] ml-auto mr-auto">
        <h2 className="font-normal text-[48px] leading-[48px] flex flex-col items-center gap-4 select-none text-center text-[#fff]">
          About Me
          <span className="w-[80px] h-[4px] bg-[#7C3AED]"></span>
        </h2>

        <div className="flex items-start justify-center pt-16 gap-12">
          <div className="flex flex-col items-start gap-6 w-154">
            {/* About information */}
            <div className="font-normal text-[16px] leading-[24px] text-[#D1D5DC] w-[616px] rounded-[16px] col-span-1 bg-[#1A1A2E] pt-8 pl-8 pr-8 pb-8">
              Men chiroyli, funktsional va foydalanuvchilar uchun qulay
              veb-tajribalarni yaratishga katta e'tibor qaratadigan ishtiyoqli
              Frontend dasturchisiman. Zamonaviy veb-texnologiyalar sohasidagi
              tajribam bilan men g'oyalarni haqiqatga aylantiraman. <br />
              <br />
              Veb-ishlab chiqish sohasidagi sayohatim vebda narsalar qanday
              ishlashiga qiziqish bilan boshlandi va u har kuni muammolarni hal
              qilish va ajoyib mahsulotlar yaratish imkoniyatiga ega bo'lgan
              martabaga aylandi. <br />
              <br />
              Kod yozish bilan shug'ullanmaganimda, meni yangi texnologiyalarni
              o'rganayotganimda, ochiq kodli loyihalarga hissa qo'shayotganimda
              yoki eng so'nggi dizayn tendentsiyalari haqida bilib olayotganimda
              ko'rishingiz mumkin.
            </div>
            <div className="justify-between flex gap-4 flex-wrap items-center">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[300px] h-[164px] rounded-2xl bg-[#1A1A2E] p-6 animate-pulse"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                        <div className="h-4 bg-gray-500 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-500 rounded w-full mt-1"></div>
                        <div className="h-3 bg-gray-500 rounded w-5/6 mt-1"></div>
                      </div>
                    </div>
                  ))
                : about.map((item, index) => (
                    <div key={item.id}>
                      <div className="w-[300px] h-[164px] rounded-2xl bg-[#1A1A2E] p-6">
                        <div className="flex flex-col gap-2">
                          <img
                            src={icons[index] || "/img-none.png"}
                            alt="Img"
                            className="w-8 h-8"
                          />
                          <h4 className="font-400 text-[16px] leading-[24px] text-[#fff]">
                            {item.name}
                          </h4>
                          <p className="font-normal text-[14px] leading-[20px] text-[#99A1AF]">
                            {item.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>

            {/* About tech stack */}
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-154 rounded-2xl bg-[#1A1A2E] p-8 gap-6 flex flex-col">
              <h4 className="font-normal text-[24px] leading-[32px]  text-[#fff]">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-4 items-center">
                {techStack.map((item) => (
                  <div
                    key={item.id}
                    className="w-[173px] h-[96px] flex flex-col pt-4 items-center rounded-[14px] gap-2 bg-[#0F0F1E]"
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-[30px] h-[36px]"
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {techAbout.map((item) => (
                <div
                  key={item.id}
                  className="w-48.5 h-28 rounded-2xl flex-col bg-[#1A1A2E] flex items-center justify-center gap-2"
                >
                  <h3 className="font-normal text-[30px] leading-9 text-[#7C3AED]">
                    {item.name}
                  </h3>
                  <p className="font-normal text-[14px] text-[#99A1AF] leading-5">
                    {item.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPublic;
