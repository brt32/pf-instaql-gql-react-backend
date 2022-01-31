import { gql } from "apollo-server";

export default gql`
  type SeeFollowersResult {
    ok: Boolean!
    error: Boolean
    followers: [User]
    totalPages: Int
  }

  type Query {
    seeFollowers(username: String!, page: Int!): SeeFollowersResult!
  }
`;
