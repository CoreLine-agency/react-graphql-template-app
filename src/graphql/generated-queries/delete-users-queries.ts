/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const DeleteUsers = gql`
  mutation DeleteUsers($ids: [ID!]!) {
    deleteUsers(ids: $ids)
  }
`;
