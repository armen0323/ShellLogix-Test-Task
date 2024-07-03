import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://your-graphql-endpoint',
    cache: new InMemoryCache(),
});
