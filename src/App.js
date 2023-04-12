import "./App.css";
import { useState } from "react";

function App() {
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const fulldate = date + "-" + (month + 1) + "-" + year;

  let sum = 0;
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isbill, setIsbill] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        product: product,
        quantity: quantity,
        price: Math.floor(Math.random() * 100),
      },
    ]);
  };

  const handeleChangeproduct = (e) => {
    setProduct(e.target.value);
  };

  const handelChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handelChangename = (e) => {
    setName(e.target.value);
  };

  const handelCreateBill = () => {
    setIsbill(true);
  };

  const handelClosebill = () => {
    setIsbill(false);
  };

  return (
    <div className="App">
      <input
        className="name-input"
        type="text"
        placeholder="Costumer Name"
        onChange={handelChangename}
      />

      {data.map((ele) => {
        return (
          <div className="div-container">
            <div className="input-div">
              <p>Select Product</p>
              <select name="" id="" onChange={handeleChangeproduct}>
                <option value="Sugar">Sugar</option>
                <option value="Oats">Oats</option>
                <option value="Cofee">Cofee</option>
                <option value="Snaks">Snacks</option>
              </select>
            </div>

            <div className="input-div">
              <p>Select Product</p>

              <input
                onChange={handelChangeQuantity}
                type="text"
                placeholder="Quantity"
              />
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <p>Select Product</p>
          <select name="" id="" onChange={handeleChangeproduct}>
            <option value="Sugar">Sugar</option>
            <option value="Oats">Oats</option>
            <option value="Cofee">Cofee</option>
            <option value="Snaks">Snacks</option>
          </select>
        </div>
        <div className="input-div">
          <p>Select Product</p>

          <input
            onChange={handelChangeQuantity}
            type="text"
            placeholder="Quantity"
          />
        </div>
        <button type="submit">Add More Item</button>
      </form>

      <hr />

      <button className="create-bill" onClick={handelCreateBill}>
        Create Bill
      </button>

      {isbill && (
        <div>
          <h4>Customer Name: {name}</h4>

          <h4>Date: {fulldate}</h4>

      

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.product}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{+item.quantity * item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="sum-div">
            <p>Total</p>

            <p>
              {data.forEach((ele) => {
                sum += ele.price * +ele.quantity;
              })}

              {sum}
            </p>
          </div>

          <button onClick={handelClosebill}>close bill</button>
        </div>
      )}
    </div>
  );
}

export default App;
