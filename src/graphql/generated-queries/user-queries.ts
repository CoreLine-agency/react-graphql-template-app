/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const User = gql`
  query User($id: EntityId!) {
    user(id: $id) {
      id
    }
  }
`;
