export const middleware = {
  Mutation: {
    createListing: async (
      resolve: any,
      parent: any,
      args: any,
      context: any,
      info: any
    ) => {
      return resolve(parent, args, context, info);
    }
  }
};
