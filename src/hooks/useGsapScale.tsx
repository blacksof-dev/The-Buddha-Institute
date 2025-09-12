import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});

const useGsapScale = (className: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className);

      if (elems.length === 0) {
        return;
      }

      elems.forEach((elem: any) => {
        gsap.from(elem, {
          scale: 0.5,
          opacity: 0,
          duration: 1.2,
          ease: "ease",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};

export default useGsapScale;
