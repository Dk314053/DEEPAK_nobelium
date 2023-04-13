import { createContext ,useEffect,useState,useReducer} from 'react';
import './App.css';
import PostList from './component/PostList'
import PostDetail from './component/PostDetail';

const reducer = (state, action) => {
  if (action.type === 'Postdata') {
    return action.payload;
  }
};
  export  const useData=createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [Ele,setEle]= useState("")

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((res)=>{
        dispatch({
            type:"Postdata",
            payload:res,
        });
    });
},[]);

  let value={
    state,
    ele:Ele,
    setEle:setEle,
  }
  return (
    <div className="App">
     <useData.Provider value={value}>
      <PostList />
      <PostDetail />
      </useData.Provider>
    </div>
  );
}

export default App;
