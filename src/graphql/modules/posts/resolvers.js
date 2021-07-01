import Post from "../../../models/Post";
import user from "../../../models/user";
export default {
	Post: {
		author: (post) => user.findById(post.author),
	},
	Query: {
		posts: () => Post.find(),
		post: (_, { id }) => Post.findById(id),
	},
	Mutation: {
		createPost: (_, { data }) => Post.create(data),
		updatePost: (_, { id, data }) =>
			Post.findOneAndUpdate(id, data, { new: true }),
		deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
	},
};
