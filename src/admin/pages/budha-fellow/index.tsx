import React from 'react'
import CardSection from '../budha-fellowship-program/cardSection'
import ProductSection from './products.tsx/product'
import MarkdownEditor from './caseStudy/markdown'
import CaseStudy from './caseStudy/caseStudy'

export default function BudhaFellow() {
    return (
        <>

            <CardSection section='02 (Cohort 2023-25)' sectionTitle='Nurturing empowerment, one Cohort at a time' role='cohort2023_25' />
            <CardSection section='02 (Cohort 2022-24)' sectionTitle='Nurturing empowerment, one Cohort at a time' role='cohort2022_24' />
            <CardSection section='02 (Cohort 2018-20)' sectionTitle='Nurturing empowerment, one Cohort at a time' role='cohort2018_20' />
            <CardSection section='02 (Cohort 2024-26)' sectionTitle='Nurturing empowerment, one Cohort at a time' role='cohort2024_26' />
            <ProductSection />
            {/* <MarkdownEditor /> */}
            <CaseStudy />
        </>
    )
}
