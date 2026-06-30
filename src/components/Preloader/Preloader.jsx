import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader({ onFinish }) {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 6) + 2;

      if (current >= 100) {
        current = 100;
        setCount(current);
        clearInterval(interval);

        setHide(true);
        setTimeout(() => {
 requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    onFinish();
  });
});
}, 1200);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`preloader ${hide ? "hide" : ""}`} style={{ pointerEvents: hide ? "none" : "auto" }}>
      <div className="preloader-center">
        <div className="preloader-icon">
          <span>&lt;/&gt;</span>
        </div>

        <h1 className="preloader-brand">R.S</h1>

        <p className="preloader-count">{count}%</p>

<div className="preloader-bar">
  <span />
</div>

<p className="preloader-text">Loading...</p>
      </div>
    </div>
  );
}