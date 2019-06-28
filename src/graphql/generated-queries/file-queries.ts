/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const File = gql`
  query File($id: EntityId!) {
    file(id: $id) {
      id
    }
  }
`;
