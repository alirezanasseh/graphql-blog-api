const postMutations = {
    createPost: (_: any, args: any) => {
        console.log('create post');
        console.log(args);
    },
    updatePost: (_: any, args: any) => {
        console.log('update post');
        console.log(args);
    }
};

export default postMutations;