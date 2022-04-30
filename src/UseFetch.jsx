import { useState, useEffect } from "react";

function UseFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch data from that resource")
                }
                return res.json();
            })
            .then(data => {
                console.log(data.results)
                setIsPending(false)
                setError(null)
                setData(data.results)
            })
            .catch( err => {
                if(err.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
    }, [url])

  return { data, isPending, error }
}

export default UseFetch