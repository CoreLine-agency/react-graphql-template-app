/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const EmailLogin = gql`
  mutation EmailLogin($password: String!, $email: String!) {
    emailLogin(password: $password, email: $email) {
      token
    }
  }
`;
