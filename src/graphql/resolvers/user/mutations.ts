const userMutations = {
    createUser: (args: any) => {
        console.log('create user');
        console.log({args});
    },
    updateUser: (args: any) => {
        console.log('update user');
        console.log({args});
    }
}

export default userMutations;