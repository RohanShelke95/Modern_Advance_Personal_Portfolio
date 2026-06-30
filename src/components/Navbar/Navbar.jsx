import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
const links = ["Home", "About", "Skills", "Work", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (l) => {
  setOpen(false);

  const id = l.toLowerCase() === "work" ? "projects" : l.toLowerCase();
  const element = document.querySelector(`#${id}`);

  if (!element) return;

  if (id === "contact") {
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  } else {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <>
      <header className="topbar">
        <button onClick={() => go("Home")} className="brand">
          ROHAN SHELKE
        </button>
        <button
  className={`menu-btn ${open ? "active" : ""}`}
  onClick={() => setOpen(!open)}
>
  <span></span>
  <span></span>
  <span></span>
</button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
  className="nav-overlay"
  initial={{ y: "-100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-100%" }}
  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
>
            <motion.div
  className="nav-head"
  initial={{ opacity: 0, y: -25 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
>
  <motion.span
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: 0.45 }}
  >
    SOCIALS
  </motion.span>

  <motion.div
    initial="hidden"
    animate="show"
    exit="hidden"
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.5,
        },
      },
    }}
  >
    {[
      ["GitHub", "https://github.com/RohanShelke95"],
      ["LinkedIn", "https://www.linkedin.com/in/rohan-shelke-9136b8317/"],
      ["Email", "mailto:shelkerohan555@gmail.com"],
    ].map(([label, href]) => (
      <motion.a
        key={label}
        href={href}
        target={label === "Email" ? undefined : "_blank"}
        variants={{
          hidden: { opacity: 0, y: -18, filter: "blur(8px)" },
          show: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.a>
    ))}
  </motion.div>
</motion.div>
            <nav>
              {links.map((l, i) => (
                <button key={l} onClick={() => go(l)}>
                  <span>{l}</span>
                  <small>0{i + 1}</small>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
