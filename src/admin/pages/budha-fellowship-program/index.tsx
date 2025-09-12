import AnchorePool from "./anchor-pool/anchore";
import MentorPool from "./mentor-pool/mentor";
import TestimonialContent from "./testimonial/testimonialContent";
import TestimonialVideo from "./testimonial/testimonialVideo";


export default function BudhaFellowshipProgram() {
    return (
        <>
            <MentorPool />
            <AnchorePool />
            <TestimonialVideo section="10" title="" />
            <TestimonialContent section="11" title="" />
        </>
    )
}
