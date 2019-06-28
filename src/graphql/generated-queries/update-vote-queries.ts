/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const UpdateVote = gql`
  mutation UpdateVote($input: VoteEditInput!) {
    updateVote(input: $input) {
      id
    }
  }
`;
