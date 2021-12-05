import { gql } from "@apollo/client";

const EDIT_USER = gql`
  mutation Mutation(
    $_id: String!
    $name: String!
    $lastname: String!
    $identification: String!
    $email: String!
    $status: Enum_StatusUsers!
  ) {
    editUser(
      _id: $_id
      name: $name
      lastname: $lastname
      identification: $identification
      email: $email
      status: $status
    ) {
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

export { EDIT_USER };
