import React from "react";
import useFetch from "./HookTest";

function UseFetchCustomHookTest() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log("data", data, "error", error, "loading", loading);

  return (
    <div>
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
