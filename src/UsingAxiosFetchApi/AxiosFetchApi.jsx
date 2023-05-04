import axios from "axios";
import { useState,useEffect} from "react";
const AxiosFetchApi=()=>{
    const [post, setPost] = useState([]);
    const [error,setError]=useState("")
const fetchData = () => {

    axios.get("https://jsonplaceholder.typicode.com/uses")
          .then((response) => setPost(response.data))
          // .catch((error)=>console.log("this is error",error))
          .catch((error)=>setError(error.message))

  }

  useEffect(() => {
    fetchData();
  },[])
  console.log(post)
  return (
    <div>
      {error!== ""&& <h1>{error}</h1>}
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