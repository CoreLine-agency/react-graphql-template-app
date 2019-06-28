/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Vote = gql`
  query Vote($id: EntityId!) {
    vote(id: $id) {
      id
    }
  }
`;
