import {gql} from "@apollo/client";

export const MUTATION_EXAMPLE = gql`
  mutation MyMutation($name: String!, $selectComponent: String!, $recipients: String!, $isSendRecipients: Boolean!, $deadlineDate: String!, $note:String){
  UpdateUser(about: $name, rowOrder:$selectComponent, profileColor: $recipients,donatorBadge:$deadlineDate, airingNotifications:$isSendRecipients,timezone: $note){
    id
  }
}
`;
