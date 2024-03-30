import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import styles from "../../styles/github-profile-finder/githubProfileFinder.module.css";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("gopibalar");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  console.log("userData", userData);
  return (
    <div className={styles.githubContainer}>
      <div className={styles.githubContainerInner}>
        <input
          name="search-by-username"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Enter Github UserName"
          value={userName}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData === null ? null : <UserCard user={userData} />}
    </div>
  );
}

export default GithubProfileFinder;
