/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const SearchComments = gql`
  query SearchComments($order: [CommentSearchOrderInput!], $take: Int, $skip: Int, $search: CommentSearchInput) {
    searchComments(order: $order, take: $take, skip: $skip, search: $search) {
      items {
        id
      }
    }
  }
`;
