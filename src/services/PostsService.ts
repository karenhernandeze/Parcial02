import instance from "./PostsAPI";

class PostsService {
  getAllPosts() {
    return instance.get("/posts");
  }

  getAllUsers() {
    return instance.get(`/users`);
  }

  getUser(id: number) {
    return instance.get(`/users/${id}`);
  }
}

export default new PostsService();
