/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const UpdateComment = gql`
  mutation UpdateComment($input: CommentEditInput!) {
    updateComment(input: $input) {
      id
    }
  }
`;
