const userMutations = {
    createUser: (_: any, args: any) => {
        console.log('create user');
        console.log(args);
    },
    updateUser: (_: any, args: any) => {
        console.log('update user');
        console.log(args);
    }
};

export default userMutations;