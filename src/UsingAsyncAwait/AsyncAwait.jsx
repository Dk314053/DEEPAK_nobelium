import React, { useState, useEffect } from 'react';

const AsyncAwait = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{display: 'flex', gap: '1rem'}} >
          <p>{item.id}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AsyncAwait;

// This code defines a React functional component named Example.

// The component uses the useState hook to create a state variable data and a function setData to update it. data is initially an empty array.

// The component defines an async function fetchData that fetches data from a URL using the fetch API. The data is in JSON format, so the response is first converted to a JSON object using the json method. The function sets the data in the component's state using the setData function.

// The component uses the useEffect hook to call the fetchData function when the component is mounted. The second argument to useEffect is an empty array, which means that the effect will only run once, when the component is first rendered.

// Finally, the component returns a div element that contains an array of div elements, one for each item of data. Each div element has two p elements that display the id and name properties of the data item. The component is exported as the default export of the module.