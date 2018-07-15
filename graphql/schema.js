const graphql = require('graphql');
const PaintingType = require('./PaintingType');
const Painting = require('./../models/Painting');

const { GraphQLString, GraphQLObjectType, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    painting: {
      type: PaintingType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Painting.findById(ars.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
