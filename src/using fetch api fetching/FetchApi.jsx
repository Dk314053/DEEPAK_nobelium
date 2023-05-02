

import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
console.log(posts)
  return (
    <div className="ParentContainer">
      {posts.map((user) => (
        <div
          style={{
            backgroundColor: 'gainsboro',
            display: 'grid',
            gridTemplateColumns: '0.1fr 1fr 2fr',
            gridGap: '1rem',
          }}
          key={user.id}
        >
          <p>{user.id}</p>
          <p>{user.title}</p>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

// This code defines a React functional component named App which displays a list of posts fetched from an external API.

// The component uses the useState hook to manage its internal state. The useState hook takes an initial value as its argument, an empty array, and returns an array with two elements: the current state value and a state update function. The state value and update function are destructured from the returned array and assigned to the variables posts and setPosts respectively.

// The component also uses the useEffect hook to handle the side effect of fetching data from the API. The useEffect hook takes two arguments:

// The effect function, which is executed whenever the component is rendered or re-rendered.
// An array of dependencies, in this case, an empty array.
// The effect function uses the fetch API to retrieve data from https://jsonplaceholder.typicode.com/posts. The response is converted to JSON using the json method, and then the setPosts function is called with the returned data to update the posts state.

// The component returns a div element that contains a list of posts, each represented by a nested div element. The style of each post div element is specified using inline styles. The map function is used to iterate over the posts state and render a div element for each post. The key prop is set to the id of each post to ensure that React can efficiently update the list when the state changes.

// Finally, the component is exported as the default export of the module.