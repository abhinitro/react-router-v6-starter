import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrementOrdecrement } from "./../redux/actions/user";
/***
 * Parent Componenr
 * State-Reducers ----(data) by using pure function
 *
 *Actions -Send data to Reducers
 *
 *
 *
 *
 *
 */
const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();

  const increment = () => {
    let counter = data.counter;
    counter++;

    dispatch(incrementOrdecrement(counter));
  };

  const decrement = () => {};

  return (
    <div>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        decrement
      </button>
      Home {data.counter}
    </div>
  );
};

export default Home;
