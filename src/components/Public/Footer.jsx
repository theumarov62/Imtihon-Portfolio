import { useEffect, useState } from "react";

function Footer() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

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
    <footer className="bg-[#0A0A14] pr-1 pl-1 border border-[#7C3AED33]/20 fixed bottom-0 w-full pt-8 pb-8 ">
      <div
        className="max-w-7xl w-full flex justify-between gap-4 items-center mx-auto"
        style={{
          flexDirection: innerWidth < 640 ? "column" : "row",
        }}
      >
        <h3
          className="font-normal text-[16px] leading-6 text-[#99A1AF] sm:text-[12px] xs:text-[10px]"
          style={{
            fontSize:
              innerWidth < 390 ? "10px" : innerWidth < 540 ? "12px" : "16px",
          }}
        >
          © 2025 Abdulloh Umarov — Built with ❤️ using React & Tailwind.
        </h3>
        {/* Social links */}
        <div className="flex items-center gap-6">
          <a href="github.com/theumarov62" target="_blank">
            <img src="/footer/footer-github.svg" alt="Github social" />
          </a>
          <a href="https://t.me/umarov_developer" target="_blank">
            <img src="/footer/footer-telegram.svg" alt="Telegram social" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
