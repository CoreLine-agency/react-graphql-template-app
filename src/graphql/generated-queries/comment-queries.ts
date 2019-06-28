/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Comment = gql`
  query Comment($id: EntityId!) {
    comment(id: $id) {
      id
    }
  }
`;
