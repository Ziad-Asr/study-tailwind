import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const headerRef = useRef();
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.backgroundColor = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }),
    [];
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-20s0"
    >
      <div className="container mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/ ${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
