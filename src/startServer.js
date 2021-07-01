import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
export default function startServer({ typeDefs, resolvers }) {
	const uri = `mongodb+srv://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}@graphql.3hsxm.mongodb.net/${process.env.NAME_DATABASE}?retryWrites=true&w=majority`;

	try {
		mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("mongoose conectado");
	} catch (error) {
		console.log("erro no mongoose ");
	}

	const server = new ApolloServer({ typeDefs, resolvers });

	server.listen().then(({ url }) => {
		console.log(`🔥 Servidor iniciado no endereço: ${url}`);
	});
}
