 
// import { lazy } from 'react';
// import type { Routes } from '@/@types/routes';
// import { ADMIN, USER } from '@/constants/roles.constant';
// import { Route } from 'react-router-dom';

// const sharedRoutes: Routes = [
//     {
//         key: 'contactUs',
//         path: `/contact-us`,
//         component: lazy(() => import('../../views/ContactUs')),
//         authority: [], // Accessible to all users
//     },
//     {
//         key: 'aboutUs',
//         path: `/about-us`,
//         component: lazy(() => import('../../views/AboutUs')),
//         authority: [], // Accessible to all users
//     },
// ];

// export default sharedRoutes;




import { lazy } from 'react';
import type { Routes } from '@/@types/routes';
 
const sharedRoutes: Routes = [
    {
        key: 'heroSection',
        path: '/hero',
        component: lazy(() => import('@/views/Home/components/HeroSection')),
        authority: [], // Accessible to all users
    },
    {
        key: 'aboutPage',
        path: '/about',
        component: lazy(() => import('@/views/Home/components/FeaturesGrid')),
        authority: [],
    },
    {
        key: 'contactPage',
        path: '/contact',
        component: lazy(() => import('@/views/Home/components/ContactForm')),
        authority: [],
    },
    {
        key: 'HomeFAQ',
        path: '/FAQ',
        component: lazy(() => import('@/views/Home/components/HomeFAQ')),
        authority: [],
    },
    {
        key: 'infoPage',
        path: '/info',
        component: lazy(() => import('@/views/Home/components/InfoSection')),
        authority: [],
    },
];

export default sharedRoutes;