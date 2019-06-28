/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const SearchVotes = gql`
  query SearchVotes($order: [VoteSearchOrderInput!], $take: Int, $skip: Int, $search: VoteSearchInput) {
    searchVotes(order: $order, take: $take, skip: $skip, search: $search) {
      items {
        id
      }
    }
  }
`;
