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

        <div>
          {about.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutPublic;
