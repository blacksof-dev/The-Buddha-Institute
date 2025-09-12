import useGsapOpacity from "./useGsapOpacity";
import useGsapOpacityTransAppear from "./useGsapOpacityTransAppear";
import useGsapStagger from "./useGsapStagger";
import useGsapScale from "./useGsapScale";
import useGsapHeight from "./useGsapHeight";

const useGSAP = (pageClassName: string) => {
  useGsapOpacity(pageClassName + " .gsap-opacity");
  useGsapOpacityTransAppear(pageClassName + " .gsap-fade-in");
  useGsapStagger(
    pageClassName + " .gsap-stagger",
    pageClassName + " .gsap-stagger-parent"
  );
  useGsapScale(pageClassName + " .gsap-scale");
  useGsapHeight(pageClassName + " .gsap-height");
};
export default useGSAP;
