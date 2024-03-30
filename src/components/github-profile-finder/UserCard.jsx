import React from "react";
import styles from "../../styles/github-profile-finder/githubProfileFinder.module.css";

function UserCard({ user }) {
  const {
    avatar_url,
    followers,
    following,
    login,
    name,
    public_repos,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className={styles.userCardContainer}>
      <div className={styles.userCardImg}>
        <img src={avatar_url} alt={login} />
      </div>
      <div className={styles.userCardInfo}>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className={styles.userCardDetaile}>
        <div>
          <p>Public Repository :</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers :</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following :</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
