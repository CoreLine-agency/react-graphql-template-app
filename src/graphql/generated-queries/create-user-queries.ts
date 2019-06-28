/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const CreateUser = gql`
  mutation CreateUser($input: UserCreateInput!) {
    createUser(input: $input) {
      id
    }
  }
`;
