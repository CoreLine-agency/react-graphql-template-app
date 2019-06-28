/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const CreateVote = gql`
  mutation CreateVote($input: VoteCreateInput!) {
    createVote(input: $input) {
      id
    }
  }
`;
