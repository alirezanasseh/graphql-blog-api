import {userQueries, userMutations} from './user';
import {postQueries, postMutations} from './post';

const resolvers = {
    Query: {
        ...userQueries,
        ...postQueries
    },
    Mutation: {
        ...userMutations,
        ...postMutations
    }
};

export default resolvers;