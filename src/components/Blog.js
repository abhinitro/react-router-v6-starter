import React ,{useState}from 'react';
//hooks



const Blog = (props) => {

    //setState does not support
    const [counter,setCounter]=useState(3);
    const [name,setName]=useState("Abhilash");
    const clickme=(e)=>{
       
        setName("Manisha");

        setCounter(counter+1);
    }
     return (
        <div>
            <div onClick={(e)=>clickme(e)}>Clickme</div>
           <p> Blogs {counter} {name}</p>
        </div>
    );
}

export default Blog;


