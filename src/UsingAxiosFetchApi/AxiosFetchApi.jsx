import axios from "axios";
import { useState,useEffect} from "react";
const AxiosFetchApi=()=>{
    const [post, setPost] = useState([]);
const fetchData = () => {

    axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => setPost(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])
  console.log(post)
  return (
    <div>
      {post.map((item) => (
        <div key={item.id} style={{display: 'flex', gap: '1rem'}} >
          <p>{item.id}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosFetchApi;