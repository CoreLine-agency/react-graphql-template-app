/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const SearchFiles = gql`
  query SearchFiles($order: [FileSearchOrderInput!], $take: Int, $skip: Int, $search: FileSearchInput) {
    searchFiles(order: $order, take: $take, skip: $skip, search: $search) {
      items {
        id
      }
    }
  }
`;
