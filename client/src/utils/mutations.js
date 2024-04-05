import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($profileId: ID!, $todo: String!) {
    addTodo(profileId: $profileId, todo: $todo) {
      _id
      name
      todos {
        _id
        text
        isCompleted
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation removeTodo($_id: ID!) {
    removeTodo(_id: $_id) {
      _id
      name
      todos
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($profileId: ID!, $friendId: ID!) {
    addFriend(profileId: $profileId, friendId: $friendId) {
      _id
      name
      friends {
        _id
        name
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($profileId: ID!, $friendId: ID!) {
    removeFriend(profileId: $profileId, friendId: $friendId) {
      _id
      name
      friends {
        _id
        name
      }
    }
  }
`;

export const UPDATE_CURRENT_TASK = gql`
  mutation updateCurrentTask($profileId: ID!, $currentTask: String!) {
    updateCurrentTask(profileId: $profileId, currentTask: $currentTask) {
      _id
      name
      currentTask
    }
  }
`;
