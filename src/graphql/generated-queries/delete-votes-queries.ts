/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const DeleteVotes = gql`
  mutation DeleteVotes($ids: [ID!]!) {
    deleteVotes(ids: $ids)
  }
`;
