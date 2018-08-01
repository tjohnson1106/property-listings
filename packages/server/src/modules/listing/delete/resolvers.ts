import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
// import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteListing: async (_, { id }, { session }) => {
      console.log(session);
      // isAuthenticated(session);

      const listing = await Listing.findOne({
        where: { id }
      });

      if (!listing) {
        //listing does not exist
        throw new Error("does not exist");
      }

      if (session.userId !== listing.userId) {
        //log message
        console.log(
          `this user ${
            session.userId
          } is attempting to delete a listing they do not own`
        );
        throw new Error("not authorized");
      }

      await Listing.remove(listing);

      return true;
    }
  }
};
