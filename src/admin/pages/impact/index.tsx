import React from 'react'
import MapImpact from './mapImpact'
import OurImpact from './ourImpact'
import TestimonialVideo from '../budha-fellowship-program/testimonial/testimonialVideo'
import TestimonialContent from '../budha-fellowship-program/testimonial/testimonialContent'

export default function Index() {
    return (
        <div>
            <MapImpact section="02" title="Mapping the collective impact by our Buddha Fellows" />
            <OurImpact />
            <TestimonialVideo section="05" title="Voices of resilience, testimonies of growth." />
            <TestimonialContent section="06" title="" />
        </div>
    )
}
