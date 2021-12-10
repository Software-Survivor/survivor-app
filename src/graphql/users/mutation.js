import { gql } from "@apollo/client";

const EDIT_USER = gql`
  mutation Register(
  $name: String!
  $lastname: String!
  $identification: String!
  $email: String!
  $rol: Enum_Rol!
  $password: String!
) {
  register(
    name: $name
    lastname: $lastname
    identification: $identification
    email: $email
    rol: $rol
    password: $password
  ) {
    token
    error
  }
}
`;

export { EDIT_USER };
