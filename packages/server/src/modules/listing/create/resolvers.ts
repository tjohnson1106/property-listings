import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
// import { isAuthenticated } from "../../shared/isAuthenticated";import { isAuthenticated } from "../../shared/isAuthenticated";

const storeUpload = async ({ stream, filename }): Promise<any> => {
  const id = shortid.generate();
  const path = `${uploadDir}/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path }))
      .on("error", reject)
  );
};

const processUpload = async upload => {
  const { stream, filename, mimetype, encoding } = await upload;
  const { id, path } = await storeUpload({ stream, filename });
  return recordFile({ id, filename, mimetype, encoding, path });
};

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (
      _,
      { input: { picture, ...data } },
      { session }
    ) => {
      console.log(session);
      // isAuthenticated(session);

      const pictureUrl = await processUpload(picture);

      await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId
      }).save();

      return true;
    }
  }
};
