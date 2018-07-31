import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteListing: async (_, { id }, { session }) => {
      console.log(session);

      if (!session.userId) {
        //user is not logged in

        throw new Error("not authenticated");
      }

      const listing = await Listing.findOne({
        where: { id }
      });

      if (!listing) {
        //listing does not exist
        throw new Error("does not exist");
      }

      await Listing.remove(listing);

      return true;
    }
  }
};
