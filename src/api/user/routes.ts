import { IPost, IUser } from "@/types/users";

export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: IUser[] = await response.json();

  return { users };
}

export async function getUserPosts(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/user/${id}/posts`
  );

  const posts: IPost[] = await response.json();

  return { posts };
}
export async function getUser(id: string | number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const user: IPost[] = await response.json();

  return { user };
}
