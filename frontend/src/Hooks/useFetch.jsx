import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  // show use something is loading
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal }) //assortiating abortController with this fetch
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data"); //checks if we got anything from data
        }
        // res is a response object not actually the data we need
        return res.json(); // this passes the json into an object
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;