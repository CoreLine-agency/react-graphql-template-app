/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Votes = gql`
  query Votes {
    votes {
      id
    }
  }
`;
