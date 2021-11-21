import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_VIDEO = gql`
  mutation addVideo($title: String!, $cloudURL: String!, $videoAuthor: String!) {
    addVideo(title: $title, cloudURL: $cloudURL, videoAuthor: $videoAuthor) {
      _id
      title
      cloudURL
      videoAuthor
      publishDate
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const VIDEO_METRICS = gql`
  mutation videoMetrics($videoId: String, $views: Int) {
    videoMetrics(videoId: $videoId, views: $views) {
      views
    }
  }
`;

export const UPDATE_LIKES = gql`
  mutation updateLikes($videoId: String,) {
    updateLikes(videoId: $videoId,) {
      _id
      title
      cloudURL
      likes
      dislikes
      views
      publishDate
    }
  }
`;

export const UPDATE_DISLIKES = gql`
  mutation updateDislikes($videoId: String,) {
    updateDislikes(videoId: $videoId,) {
      _id
      title
      cloudURL
      likes
      dislikes
      views
      publishDate
    }
  }
`;

export const REMOVE_VIDEO = gql`
  mutation removeVideo($videoId: ID!) {
    removeVideo(videoId: $videoId) {
      _id
      title
      cloudURL
      likes
      dislikes
      views
      publishDate
    }
  }
`

export default ADD_VIDEO;
