import { gql } from '@apollo/client';


export const QUERY_USER = gql `
query user($username: String!) {
    user(username:$username) {
        posts {
            title
            calories
        }


    }
}`


export const QUERY_CALORIES = gql ` 
query Query($email: String!) {
    user(email: $email) {
      posts {
        calories
      }
    }
  }`