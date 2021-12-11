import { gql } from "@apollo/client";

const GET_ADVANCEMENTS = gql`
  query Query {
    Advancements {
      _id
      date
      description
      observations
    }
  }
`;

const GET_ADVANCEMENT_BY_ID = gql`
  query Advancement($id: String!) {
    Advancement(_id: $id) {
      description
      observations
    }
  }
`;

export { GET_ADVANCEMENTS, GET_ADVANCEMENT_BY_ID };
