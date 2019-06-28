/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Files = gql`
  query Files {
    files {
      id
    }
  }
`;
