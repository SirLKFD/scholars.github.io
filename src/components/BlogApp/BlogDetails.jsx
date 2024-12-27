import { useParams } from 'react-router-dom';

function BlogDetails(){

    // Grab the parameter from the URL
    const {id} = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
    )
}

export default BlogDetails;