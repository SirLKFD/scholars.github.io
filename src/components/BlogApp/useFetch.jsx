// Creating custom hook useFetch to fetch data from the server,
// can be used in multiple components

// Important to put "use" in front of the function name
// to detect that it is a custom hook by React

// Very useful for reusing code especially when you have multiple components
// that need to fetch data from the server

// Don't forget to clean up the useEffect hook by returning a cleanup function
// if you are using it in a component that will be unmounted

import { useState, useEffect } from 'react';

function useFetch(url){

    const[data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortConst = new AbortController();

        fetch(url, {signal: abortConst.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('Fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        return () => abortConst.abort();

    }, [url]);

    return {data, isPending, error};

}

export default useFetch;