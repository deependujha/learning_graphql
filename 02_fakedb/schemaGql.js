import { gql } from "apollo-server";

const typeDefs = gql`
	#graphql
	type Query {
		users: [User]
		quotes: [Quote]
		user(id: ID!): User
		iQuote(by: ID!): [Quote]
	}

	type User {
		id: ID
		firstName: String
		lastName: String
		email: String
		quotes: [Quote]
	}

	type Quote {
		quote: String
		by: ID
		firstName: String
		lastName: String
	}
`;

export default typeDefs