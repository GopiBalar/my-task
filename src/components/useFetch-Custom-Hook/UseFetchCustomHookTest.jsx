import React from "react";
import useFetch from "./HookTest";
import styles from "../../styles/useFetch-custom-hook/useFetchCustomHook.module.css";

function UseFetchCustomHookTest() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log("data", data, "error", error, "loading", loading);

  return (
    <div className={styles.useFetchCustomHook}>
      <h1>Use Fetch Hook</h1>
      {loading ? <h1>Loading ... Please Wait!</h1> : null}
      {error ? <h1>{error}</h1> : null}

      {data && data.products && data.products.length
        ? data.products.map((productsItem) => (
            <p key={productsItem.key}>{productsItem.title}</p>
          ))
        : null}
    </div>
  );
}

export default UseFetchCustomHookTest;
