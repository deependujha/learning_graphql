import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import './mongodb/conn.js';

// here we are defining our 'GraphQL schemas'
const typeDefs = gql`
	type Query {
		greet: String
		bye: String
	}
`;
// here we are defining our resolvers
const resolvers = {
	Query: {
		greet: () => {
			return 'hello world';
		},
		bye: () => {
			return 'bye bye! Happy learning.';
		},
	},
};

// here we are defining our server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// here we are passing 6969 port no. If we donot pass it, it will run on 4000 port by default.
server.listen(6969).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
