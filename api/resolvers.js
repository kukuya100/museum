const GraphQLJSON = require("graphql-type-json");
const Query = require("./query");
const Mutation = require("./mutation");

const resolvers = {
  JSON: GraphQLJSON,
  Query: Query,
  Mutation: Mutation,
};

module.exports = resolvers;
