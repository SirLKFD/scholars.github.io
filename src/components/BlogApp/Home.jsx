import React, {useState, useEffect} from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";


function Home(){

    // using {} to destructure the object returned by useFetch
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">
            {error && <h1>{error}</h1>} {/* Display error if there is one */}
            {isPending && <h1>Loading...</h1>} {/* Display loading message if data is being fetched */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>} {/* Display blogs if data is fetched */}
        </div>
    )

}

export default Home;


// Simulate a delay in fetching data for 1000ms

// useEffect(() => {
//     setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//                 .then(res => {
//                     return res.json()
//                 })
//                 .then(data => {
//                     setBlogs(data);
//                     setIsPending(false);
//                 })
//         }
//         , 1000);
// }, []);
