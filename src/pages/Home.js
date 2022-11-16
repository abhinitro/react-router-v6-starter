import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { incrementOrdecrement,getUserDetails } from "./../redux/actions/user";
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
  const state = useSelector((state) => state);
  const data=state.Auth;
  const dispatch = useDispatch();

  const increment = () => {
    let counter = data.counter;
    counter++;

    
    dispatch(incrementOrdecrement(counter));
  };

  useEffect(() => {


    dispatch(getUserDetails())
    
  }, []);

  const navigate=useNavigate();

  const decrement = () => {};

  return (
    <div>

      <div onClick={(e)=>navigate('/contact')}>Move To Contact</div>
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
