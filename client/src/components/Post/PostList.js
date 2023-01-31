import React, { useState } from "react";
import { useGetPostsQuery, usePostBlogMutation,useDeleteBlogMutation,useUpdateBlogMutation } from "./postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload,faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal, { ModalOverlay } from "./Modal";
const PostList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();
  const [addBlog] = usePostBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation()
  const [editBlog] = useUpdateBlogMutation()
  const [show,setShow] = useState(false)
console.log(data)
  const [newTodo, setNewTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addBlog({ title: newTodo });
    setNewTodo("");
  };
const showHandler = ()=>{
setShow(!show)
}
  const newSection = (
    <form onSubmit={submitHandler}>
      <label htmlFor="newblog">Enter a new todo item</label>
      <div className="newblog">
        <input
          type="text"
          id="newblg"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="add blog"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
console.log(show)
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((post) => {
      return (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <button onClick={()=>deleteBlog({id:post._id})} >  <FontAwesomeIcon icon={faTrash} /></button>
           
           
         
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <main>
      {newSection}
      <h1>Todo List</h1>
      

      {content}
    </main>
  );
};

export default PostList;
