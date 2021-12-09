import { gql } from "@apollo/client";

const CREATE_INSCRIPTION = gql`
  mutation CreateInscription($project: String!, $student: String!) {
    createInscription(project: $project, student: $student) {
      _id
    }
  }
`;

const EDIT_INSCRIPTION_ENDDATE_NOW = gql`
mutation EditInscriptionEndDateNow($_id: String!) {
  editInscriptionEndDateNow(_id: $_id) {
    dateEnd
  }
}
`;

export {CREATE_INSCRIPTION, EDIT_INSCRIPTION_ENDDATE_NOW};
