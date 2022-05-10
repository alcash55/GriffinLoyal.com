import { lazy } from 'react';

export const Sections = {
    AboutMe: lazy(() => import('./AboutMe')),
    Merch: lazy(() => import('./Merch')),
    Schedule: lazy(() => import('./Schedule')),
    Sponsors: lazy(() => import('./Sponsors')),
    Watch: lazy(() => import('./Watch')),
}