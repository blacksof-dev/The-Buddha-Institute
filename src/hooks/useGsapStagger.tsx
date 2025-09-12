import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});

const useGsapStagger = (childClass: string, parentClass: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(childClass);
      const parent = document.querySelector(parentClass);

      if (!parent || elems.length === 0) {
        return;
      }

      gsap.from(elems, {
        opacity: 0,
        stagger: 0.1,
        ease: "ease",
        scrollTrigger: {
          trigger: parent,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });
};

export default useGsapStagger;
