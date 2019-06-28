/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Users = gql`
  query Users {
    users {
      id
    }
  }
`;
