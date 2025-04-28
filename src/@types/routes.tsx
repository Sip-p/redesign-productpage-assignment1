import { LayoutType } from './theme'
import type { LazyExoticComponent, ReactNode } from 'react'
import { FC, lazy } from 'react';
export type PageHeaderProps = {
    title?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
    description?: string | ReactNode
    contained?: boolean
    extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element>
}

export interface Meta {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    pageBackgroundType?: 'default' | 'plain'
    header?: PageHeaderProps
    footer?: boolean
    layout?: LayoutType
}

export type Route = {
    key: string;
    path: string;
    component: LazyExoticComponent<FC<any>>; // Allows any props
    authority: string[];
    meta?: Meta;
};


const metaData: Meta = {
    pageContainerType: 'default',
    pageBackgroundType: 'plain',
    header: { title: 'Hero Section' },
    footer: true
};
export type Routes = Route[]
