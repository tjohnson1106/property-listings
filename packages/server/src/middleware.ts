const isAuthenticated = async (
  resolve: any,
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (!context.session.userId) {
    //user is not logged in

    throw new Error("not authenticated from graphql middlware");
  }

  return resolve(parent, args, context, info);
};

export const middleware = {
  Mutation: {
    createListing: isAuthenticated,
    deleteListing: isAuthenticated
  }
};
