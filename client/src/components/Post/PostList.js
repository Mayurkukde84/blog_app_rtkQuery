import React from "react";
import { useGetPostsQuery } from "./postSlice";

const PostList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
console.log(posts)
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = posts.map((post) => {
      return (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.blogPost}</p>
        </article>
      );
    });
  }else if(isError){
content = <p>{error}</p>
  }

  return <div>PostList {content}</div>;
};

export default PostList;
