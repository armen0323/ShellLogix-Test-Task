declare module '@apollo/experimental-nextjs-app-support/nextjs' {
    import { FC } from 'react';
    export function withApollo<T>(Component: T): T;
}
