import { useEffect, useState } from "react";
import About from "../../services/About";
function AboutPublic() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    async function fetchAbout() {
      const res = await About.getAbout();
      setAbout(res.data);
      console.log(res.data);
    }

    fetchAbout();
  }, []);
  return (
    <section className="bg-[#0F0F1E] pt-[98px] pb-[96px]">
      <div className="max-w-[1280px] w-[100%] ml-auto mr-auto">
        <h2 className="font-normal text-[48px] leading-[48px] flex flex-col items-center gap-4 select-none text-center text-[#fff]">
          About Me
          <span className="w-[80px] h-[4px] bg-[#7C3AED]"></span>
        </h2>

        <div className="grid grid-cols-6 grid-rows-5">
          {/* About information */}
          <div className="font-normal text-[16px] leading-[24px] text-[#D1D5DC] w-[616px] rounded-[16px] bg-[#1A1A2E] pt-8 pl-8 pr-8 pb-8">
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
          <div className="justify-between flex gap-4 items-center">
            {about.map((item) => {
              return (
                <div key={item.id}>
                  <div className="w-[300px] h-[164px] rounded-[16px] bg-[#1A1A2E] pt-[24px] pb-[24px] pl-[24px]">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-400 text-[16px] leading-[24px] text-[#fff]">
                        {item.name}
                      </h4>
                      <p className="font-normal text-[14px] leading-[20px] text-[#99A1AF]">
                        {item.bio}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* About tech stack */}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPublic;
