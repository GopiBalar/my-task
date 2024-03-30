import React, { useEffect, useState } from "react";
import styles from "../../styles/serch-autoComplete-with-api/serchAutoComplete.module.css";
import ListItem from "./ListItem";

function SerchAutoComplete() {
  const [datas, setDatas] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serching, setSerching] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);

  function handleChange(e) {
    setSerching(e.target.value.toLowerCase());
    if (serching.length > 1) {
      const filterData =
        datas && datas.length
          ? datas.filter((item) => item.toLowerCase().indexOf(serching) > -1)
          : null;
      setFilterUsers(filterData);
    }
  }

  function handleClick(e) {
    setSerching(e.target.innerText);
    setFilterUsers([]);
  }

  async function fetchSerchingUser() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setLoading(false);
        setDatas(data.users.map((item) => item.firstName));
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSerchingUser();
  }, []);

  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className={styles.serchAutoCompleteContainer}>
      <h2>Serch Auto Complete</h2>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <input
          type="text"
          placeholder="Search users ..."
          value={serching}
          onChange={handleChange}
          className={styles.serchAutoInput}
        />
      )}
      {filterUsers ? (
        <ListItem handleClick={handleClick} filterdUsers={filterUsers} />
      ) : null}
    </div>
  );
}

export default SerchAutoComplete;
