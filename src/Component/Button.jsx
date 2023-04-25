import React from "react";
import { useDispatch } from "react-redux";
import { buttonSlice } from "./store";
import { useSelector } from "react-redux";
import './Button.css';

function Button() {
  const data = useSelector((state) => state.buttons);
  console.log(data);

  const buttons = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
  ];
  const dispatch = useDispatch();
  const handleClick = (value) => {
    const obj = {
      char: value,
      count: 1,
    };
    dispatch(buttonSlice.actions.addButtoncount(obj));
  };

  return (
    <div>
      {buttons.map((value, index) => {
        return (
          <button className="btn-btn" key={index} onClick={() => handleClick(value)}>
            {value}
          </button>
        );
      })}

      <table className="table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((char) => {
            return (
              <tr>
                <td>{char.char}</td>
                <td>{char.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Button;