/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const UpdateFile = gql`
  mutation UpdateFile($input: FileEditInput!) {
    updateFile(input: $input) {
      id
    }
  }
`;
