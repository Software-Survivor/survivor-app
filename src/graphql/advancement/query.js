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

export { GET_ADVANCEMENTS }
