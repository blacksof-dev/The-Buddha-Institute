import React from 'react'
import StoriesGlories from './stories-glories'
import NewsAndMedia from '../home/newsAndMedia'
import Brochures from '../home/brochures'

export default function ResourcesAdmin() {
    return (
        <>
            <StoriesGlories />
            <NewsAndMedia section='04' />
            <Brochures section='05' />
        </>
    )
}
