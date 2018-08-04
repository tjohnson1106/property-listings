 // @ts-ignore
import * as React from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import { CreateListingMutationVariables, CreateListingMutation } from "../../schemaTypes";

export const createListingMutation = gql`
  mutation CreateListingMutation(
    $name: String!
    $category: String!
    $description: String!
    $price: Int!
    $beds: Int!
    $guests: Int!
    $latitude: Float!
    $longitude: Float!
    $amenities: [String!]!
  ) {
    createListing(
      input: {
        name: $name
        category: $category
        description: $description
        price: $price
        latitude: $latitude
        longitude: $longitude
        beds: $beds
        guests: $guests
        amenities: $amenities
      }
    )
  }
`;

// TS interface needed for createListing

export interface NewPropsCreateListing {
    createListing: ( variables: CreateListingMutationVariables ) => void;
}


/*prettier-ignore*/
export const withCreateListing = graphql<
  any,
  CreateListingMutation,
  CreateListingMutationVariables,
  NewPropsCreateListing
>(createListingMutation, {
  props: ({ mutate }) => ({
    createListing: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      } );
      console.log( "response", response )  
    }
  })
});