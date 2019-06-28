/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const CreateFile = gql`
  mutation CreateFile($input: FileCreateInput!) {
    createFile(input: $input) {
      id
    }
  }
`;
