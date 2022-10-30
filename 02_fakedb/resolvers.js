import { users, quotes } from './fakeDB.js';

const resolvers = {
	Query: {
		users: () => users,
		quotes: () => {
			return quotes;
		},
		user: (parent, args) => {
			return users.find((ur) => ur.id == args.id);
		},
		iQuote: (parent, { by }) => {
			return quotes.filter((qt) => qt.by == by);
		},
	},
	User: {
		quotes: (usr) => {
			return quotes.filter((quote) => quote.by == usr.id);
		},
	},

	Quote: {
		firstName: (qt) => {
			return users.find((ur) => ur.id == qt.by).firstName;
		},
		lastName: (qt) => {
			return users.find((ur) => ur.id == qt.by).lastName;
		},
	},
};

export default resolvers;
