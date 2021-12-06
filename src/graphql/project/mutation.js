import { gql } from "@apollo/client";

const CREATE_PROJECT = gql`
  mutation CreateProject(
    $nameProject: String!
    $budget: Float!
    $leader: String!
    $objective: [inputObjective]
  ) {
    createProject(
      nameProject: $nameProject
      budget: $budget
      leader: $leader
      objective: $objective
    ) {
      _id
      nameProject
      budget
    }
  }
`;

const CREATE_OBJECTIVE = gql`
  mutation CreateObjective($idProject: String!, $field: fieldObjective!) {
    createObjective(idProject: $idProject, field: $field) {
      nameProject
    }
  }
`;

export { CREATE_PROJECT, CREATE_OBJECTIVE };
