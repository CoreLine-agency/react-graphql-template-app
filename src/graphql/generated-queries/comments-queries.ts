/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Comments = gql`
  query Comments {
    comments {
      id author { id fullName } text title
    }
  }
`;
