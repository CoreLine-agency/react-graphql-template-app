/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const EmailRegister = gql`
  mutation EmailRegister($input: UserCreateInput!) {
    emailRegister(input: $input) {
      token
    }
  }
`;
