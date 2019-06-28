/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const UpdateUser = gql`
  mutation UpdateUser($input: UserEditInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;
