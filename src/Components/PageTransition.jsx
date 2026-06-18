
import { useEffect, useRef, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const location = useLocation();

  // the page currently displayed
  const [displayLocation, setDisplayLocation] = useState(location);

  // if we moving now
  const [transitionStage, setTransitionStage] = useState("idle");

  const overlayRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // initial state
  useEffect(() => {
    gsap.set(overlayRef.current, {
      autoAlpha: 0,
      pointerEvents: "none",
    });

    gsap.set(leftRef.current, {
      xPercent: -100,
    });

    gsap.set(rightRef.current, {
      xPercent: 100,
    });
  }, []);

  // when location changed
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("closing");
    }
  }, [location, displayLocation]);

  // start animation
  useEffect(() => {
    if (transitionStage === "closing") {
      gsap.set(overlayRef.current, {
        autoAlpha: 1,
        pointerEvents: "all",
      });

      gsap.timeline({
        onComplete: () => {
          // after closing page change page
          setDisplayLocation(location);
          setTransitionStage("opening");
        },
      })
        .to(leftRef.current, {
          xPercent: 0,
          duration: 0.6,
          ease: "power3.inOut",
        }, 0)
        .to(rightRef.current, {
          xPercent: 0,
          duration: 0.6,
          ease: "power3.inOut",
        }, 0);
    }

    if (transitionStage === "opening") {
      gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, {
            autoAlpha: 0,
            pointerEvents: "none",
          });

          setTransitionStage("idle");
        },
      })
        .to(leftRef.current, {
          xPercent: -100,
          duration: 0.6,
          ease: "power3.inOut",
        })
        .to(
          rightRef.current,
          {
            xPercent: 100,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "<"
        );
    }
  }, [transitionStage, location]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[99999] overflow-hidden"
      >
       {/* Left Curtain */}
<div
  ref={leftRef}
  className="absolute top-0 left-0 h-full w-[55%] overflow-hidden"
>
  <div
    className="w-full h-full"
    style={{
      background: `
        repeating-linear-gradient(
          90deg,
          #7d0a0a 0px,
          #a31212 30px,
          #7d0a0a 60px
        )
      `,
      borderTopRightRadius: "60px",
      borderBottomRightRadius: "60px",
       borderLeft: "4px solid #D4A017",
  boxShadow: "20px 0 50px rgba(0,0,0,.6)"
    }}
  />
</div>

{/* Right Curtain */}
<div
  ref={rightRef}
  className="absolute top-0 right-0 h-full w-[55%] overflow-hidden"
>
  <div
    className="w-full h-full"
    style={{
      background: `
        repeating-linear-gradient(
          90deg,
          #7d0a0a 0px,
          #a31212 30px,
          #7d0a0a 60px
        )
      `,
      borderTopLeftRadius: "60px",
      borderBottomLeftRadius: "60px",
       borderRight: "4px solid #D4A017",
  boxShadow: "20px 0 50px rgba(0,0,0,.6)"
    }}
  />
</div>
      </div>

      {/* current page */}
      <Routes location={displayLocation}>
        {children.props.children}
      </Routes>
    </>
  );
}
