import React, { useState,useEffect } from "react";
import { Form, Input } from "reactstrap";

//useContext

//ROutes in Functional Component

/***
 * hooks for routes
 * 
 * 
 * 
 * 
 */

function Content(props) {
  let [counter, setCounter] = useState(0);
  let [formData, setFormData] = useState({ myno: "" });


  const makeCounter = () => {
    setCounter((counter = counter + 1));
  };

  useEffect(()=>{
    console.log("Blank","componentDIDMount");
  },[])

  useEffect(()=>{

    console.log("update")
    
  },[counter])

  const setForm = (e) => {
    let key = e.target.name;

    let obj = formData;
    obj[key] = e.target.value;

    setFormData(obj);
  };

  console.log(formData);
  return (
    <div>
    <div onClick={(e) => makeCounter(e)}>
      Content {counter}
     
      
    </div>
    <Form>
    <Input type="text" name="myno" onChange={(e) => setForm(e)} />
  </Form>
  </div>
  );
}
export default Content;
