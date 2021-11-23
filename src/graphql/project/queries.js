import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query Projects {
  Projects {
    nameProject
    budget
    startDate
    endDate
    statusProject
    stageProject 
  }
}
`;

export { GET_PROJECTS };
