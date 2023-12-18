// import React, { useEffect, useState } from "react";
import UseFatch from "./UseFatch";
import "./DataFatching.css";
export default function DataFatching() {
  const { data, isLoading, error } = UseFatch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const loadingMessage = <h3>Todo is Loading......</h3>;
  const errormessage = <p>{error}</p>;
  const todosElement =
    data &&
    data.map((todo) => {
      return (
        <div className="prente" key={todo.id}>
          <h3>{todo.userId}</h3> <br />
          <h2>{todo.title}</h2> <br />
          <p>{todo.body}</p>
        </div>
      );
    });
  return (
    <div className="abc">
      {/* <h1>Todos</h1> */}
      {error && errormessage}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
}
