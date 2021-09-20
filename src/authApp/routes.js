import React from 'react';
import PagesSection from '../components/PageSection'
import Inicio from './pages/Inicio'
import Alcoholes  from './pages/Alcoholes'
import Textiles from './pages/Textiles'
import Gourmet from './pages/Gourmet'


export default [
    {
        path:'/app/home',
        label: 'Inicio',
        type: 'menu',
        Component: () =>(
            <PagesSection>
                <Inicio/>
            </PagesSection>
        )
    },
    {
        path:'/app/alcoholes',
        label: 'Alcoholes',
        type: 'menu',
        Component: () => (
            <PagesSection>
                <Alcoholes/>
            </PagesSection>
        )
    },
    {
        path:'/app/gourmet',
        label: 'Gourmet',
        type: 'menu',
        Component: () => (
            <PagesSection>
                <Gourmet/>
            </PagesSection>
        )
    },{
        path:'/app/textiles',
        label: 'Textiles',
        type: 'menu',
        Component: () => (
            <PagesSection>
                <Textiles/>
            </PagesSection>
        )
    }

]