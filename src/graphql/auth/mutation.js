import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Register(
    $name: String!
    $lastname: String!
    $identification: String!
    $email: String!
    $rol: Enum_Rol!
    $password: String!
    $status: Enum_StatusUsers
  ) {
    register(
      name: $name
      lastname: $lastname
      identification: $identification
      email: $email
      rol: $rol
      password: $password
      status: $status
    ) {
      token
      error
    }
  }
`;

const LOGIN = gql`
 mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    error
  }
}
`;

const VALIDATE_TOKEN = gql`
mutation ValidateToken {
  validateToken {
    token
    error
  }
}
`;

export { REGISTER, LOGIN, VALIDATE_TOKEN };
