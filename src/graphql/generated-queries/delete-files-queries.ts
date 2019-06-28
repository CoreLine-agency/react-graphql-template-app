/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const DeleteFiles = gql`
  mutation DeleteFiles($ids: [ID!]!) {
    deleteFiles(ids: $ids)
  }
`;
