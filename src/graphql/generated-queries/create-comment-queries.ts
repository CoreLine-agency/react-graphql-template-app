/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const CreateComment = gql`
  mutation CreateComment($input: CommentCreateInput!) {
    createComment(input: $input) {
      id
    }
  }
`;
