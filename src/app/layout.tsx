'use client'

import {ReactNode} from 'react';
import {apolloAppProvider} from "@/providers/apollo-app-provider";

import '../styles/index.scss';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

const RootLayout = ({children,}: Readonly<{ children: ReactNode; }>) => (
    <html lang="en">
    <body suppressHydrationWarning>
    <AppRouterCacheProvider>
        {children}
    </AppRouterCacheProvider>
    </body>
    </html>
);


export default apolloAppProvider(RootLayout)
