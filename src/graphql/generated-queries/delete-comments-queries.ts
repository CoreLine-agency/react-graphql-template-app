/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const DeleteComments = gql`
  mutation DeleteComments($ids: [ID!]!) {
    deleteComments(ids: $ids)
  }
`;
