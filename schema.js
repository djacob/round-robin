const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} = require('graphql');

/* Mock Data */
const mockData = {
    pools: {
        '1': {id: '1', type: 'A', competitors: ['1', '2', '3']},
        '2': {id: '2', type: 'B', competitors: ['2', '4']},
        '3': {id: '3', type: 'C', competitors: ['2', '3', '4']}
    },
    competitors: {
        '1': {id: '1', firstName: 'Joe', lastName: 'Brown'},
        '2': {id: '2', firstName: 'Jan', lastName: 'Beige'},
        '3': {id: '3', firstName: 'Jim', lastName: 'Burgundy'},
        '4': {id: '4', firstName: 'Jess', lastName: 'Biscuit'},
    }
};

const CompetitorType = new GraphQLObjectType({
    name: 'Competitor',
    description: '...',

    fields: () => ({
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString}
    })
});

const PoolType = new GraphQLObjectType({
    name: 'Pool',
    description: '...',

    fields: () => ({
        id: {type: GraphQLString},
        type: {type: GraphQLString},
        competitors: {
            type: new GraphQLList(CompetitorType),
            resolve: (pool, args) => {
                return pool.competitors.map(
                    competitorId => mockData.competitors[competitorId]
                );
            }
        }
    })
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
        competitor: {
            type: CompetitorType,
            args: {id: {type: GraphQLString}},
            resolve: (root, args) => {
                return mockData.competitors[args.id];
            }
        },
        pool: {
            type: PoolType,
            args: {id: {type: GraphQLString}},
            resolve: (root, args) => {
                return mockData.pools[args.id];
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: QueryType,
});

