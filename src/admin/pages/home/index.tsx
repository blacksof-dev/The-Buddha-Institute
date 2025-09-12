import React from 'react'
import PartnersAndSupportersAdmin from '../partners-and-supporters'
import PartnersAndSupporters from '../partners-and-supporters/partners-and-supporters'
import NewsAndMedia from './newsAndMedia'
import Newsletter from './Newsletter'
import Brochures from './brochures'
import AdminImpact from '../impact/mapImpact'


export default function Index() {
    return (
        <div className=' px-4'>
            <AdminImpact section='09' title='Impact on tackling poverty, unemployment, and climate change since 2018.' />
            <PartnersAndSupporters section="10" />
            <NewsAndMedia section='12' />
            <Newsletter />
            <Brochures section='12' />
        </div>
    )
}
