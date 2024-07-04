"use client";
import {PropsWithChildren} from "react";
import {ApolloProvider, createHttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ReactNode} from "react";
import {AppProps} from "next/app";

const httpLink = createHttpLink({
    uri:'https://anilist.co/graphiql'
})
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});


export const apolloAppProvider = (Component:AppProps['Component']) => (props:AppProps)=>
    (
        <ApolloProvider client={client} >
            <Component{...props} />
        </ApolloProvider>
    );
