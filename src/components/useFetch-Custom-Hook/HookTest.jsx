import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(`${err}. Some error occured`);
      setLoading(false);
    }
  }
  console.log("datta", data);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
// if (!response.ok) throw new Error(response.statusText);
//   response ok nhi hoga to Error direct catch mein throw hogi
