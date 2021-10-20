import { userInfo } from "os";
import React from "react";
import PostPreview from "../../components/PostPreview";
import PostService from "../../services/PostsService"
import PostItem from "../../types/PostItem"
import User from "../../types/User";

interface ListState {
  posts: PostItem[];
  users: User[];
}

/**
 * Posts List Container
 * @extends {Component<Props, State>}
 */
class PostsList extends React.Component<{}, ListState> {
  state = {
    posts: [] as PostItem[],
    users: [] as User[]
  };

  componentDidMount() {
    PostService.getAllPosts().then(
        (response) => {
        const posts = response.data as PostItem[];
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error);
      });
    PostService.getAllUsers().then(
      (response) => {
        const users = response.data as User[];
        this.setState({ users });
      }
    )
  }
  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    var postsList: any[] = [];
    this.state.posts.forEach((post) => {
      const user = this.state.users.find( userInfo => userInfo.id === post.userId) as User
        postsList.push(<PostPreview post={post} user={user}/>)
    });
    // <PostPreview> </PostPreview>
    return postsList;
  }
}

export default PostsList;