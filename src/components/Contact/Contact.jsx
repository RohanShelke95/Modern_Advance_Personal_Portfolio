import { useLayoutEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const form = useRef();
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth > 768;

      gsap.set(boxRef.current, {
        opacity: 0,
        visibility: "hidden",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        scale: 0.75,
      });

      gsap.set(".contact-inner", {
        opacity: 0,
        y: 60,
        scale: 0.96,
      });

      if (isDesktop) {
        gsap.set(".topbar", {
          y: 0,
          opacity: 1,
          pointerEvents: "auto",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3600",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onLeave: () => {
            if (isDesktop) {
              gsap.to(".topbar", {
                y: 0,
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.35,
                ease: "power3.out",
              });
            }
          },
          onLeaveBack: () => {
            if (isDesktop) {
              gsap.to(".topbar", {
                y: 0,
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.35,
                ease: "power3.out",
              });
            }
          },
        },
      });

      const words = gsap.utils.toArray(".process-word");

      words.forEach((word) => {
        tl.fromTo(
          word,
          { opacity: 0, y: 90, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          }
        )
          .to(word, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
          })
          .to(word, {
            opacity: 0,
            y: -90,
            scale: 0.92,
            duration: 0.45,
            ease: "power3.in",
          });
      });

      if (isDesktop) {
        tl.to(
          ".topbar",
          {
            y: -120,
            opacity: 0,
            pointerEvents: "none",
            duration: 0.35,
            ease: "power3.out",
          },
          ">"
        );
      }

      tl.set(boxRef.current, {
        opacity: 1,
        visibility: "visible",
      });

      tl.to(boxRef.current, {
        width: "92vw",
        height: "82vh",
        borderRadius: "42px",
        scale: 1,
        duration: 1.4,
        ease: "power3.inOut",
      });

      tl.to(
        ".contact-inner",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.35"
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      gsap.to(".topbar", {
        y: 0,
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.2,
      });
      ctx.revert();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm("service_2mfwd2r", "template_2usrgej", form.current, {
        publicKey: "_XYlcRB8yH7K6ZneB",
      })
      .then(() => {
        setSent(true);
        setSending(false);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
        setSending(false);
      });
  };

  return (
    <section className="contact-scroll" id="contact" ref={sectionRef}>
      <div className="process-line">
        <span className="process-word">ANALYZE</span>
        <span className="process-word">DESIGN</span>
        <span className="process-word">BUILD</span>
        <span className="process-word">DELIVER</span>
      </div>

      <div className="contact-box" ref={boxRef}>
        <div className="contact-inner">
          <div className="contact-left">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">Let’s Connect</h2>

            <p className="contact-desc">
              Ready to collaborate on modern, scalable, and user-focused digital
              experiences — let’s build something impactful together.
            </p>

            <div className="contact-info">
              <div>
                <small>Email</small>
                <a href="mailto:shelkerohan555@gmail.com">shelkerohan555@gmail.com</a>
              </div>

              <div>
                <small>LinkedIn</small>
                <a
                  href="https://www.linkedin.com/in/rohan-shelke-9136b8317/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/rohan-shelke-9136b8317/
                </a>
              </div>

              <div>
                <small>GitHub</small>
                <a
                  href="https://github.com/RohanShelke95"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/RohanShelke95
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>

            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"} <FiSend />
            </button>

            {sent && <p className="success-msg">Message sent successfully!</p>}
            {error && <p className="error-msg">Message failed. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}