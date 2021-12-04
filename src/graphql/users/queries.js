import { gql } from "@apollo/client";

const GET_USERS = gql`
  query User {
    Usuario {
      _id
      name
      lastname
      identification
      email
      status
      rol
    }
  }
`;

export {GET_USERS}