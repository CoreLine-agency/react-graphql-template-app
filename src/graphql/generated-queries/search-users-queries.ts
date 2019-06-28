/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const SearchUsers = gql`
  query SearchUsers($order: [UserSearchOrderInput!], $take: Int, $skip: Int, $search: UserSearchInput) {
    searchUsers(order: $order, take: $take, skip: $skip, search: $search) {
      items {
        id
      }
    }
  }
`;
