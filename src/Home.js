import React from "react";
import Feed from "./Feed";
const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="Home">
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display</p>
      )} */}
      {isLoading && <p className="statusMsg"> Loading posts</p>}
      {!isLoading && fetchError && (
        <p className="statusMSg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMSg">No post to display.</p>
        ))}
    </main>
  );
};

export default Home;
