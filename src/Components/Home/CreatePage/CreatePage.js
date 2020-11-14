import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const CreatePage = () => {
    const { register, handleSubmit,errors } = useForm();
    const [scale,setScale]=useState({})
    
    const onSubmit = data =>{
        setScale(data)
    };
  const handleClick=()=>{

      console.log("Header:",scale?.scalename,scale?.scalevalue)
      console.log("Row :",scale)
  }
  const handleDelete=()=>{

    setScale("")
}

    return (
        <div>
         
         <form onSubmit={handleSubmit(onSubmit)}>

        <label>Scale For</label>
      <input name="scalefor" placeholder="Scale for" ref={register({ required: true })} /> 
      <label>Scale Name</label>
      <input name="scalename" ref={register({ required: true })} placeholder="Scale Name" />
      {errors.scalename && <span>This field is required</span>}
      <label>Scale Value</label>
      <input name="scalevalue" ref={register({ required: true })} placeholder="Scale Value"/>
      {errors.scalevalue && <span>This field is required</span>}
      
      <input type="submit" value="add" />
      <button onClick={handleClick}>save</button>
    </form>
     <br/> <br/>
    <table cellPadding="5" border="none">
        <th>SL</th>
        <th>Scale name</th>
        <th>Scale Vule</th>
        <th>Action</th>
       <tbody>
       
        {
            scale.scalename?<tr>
            <td>1</td>
            <td>{scale.scalename}</td>
            <td>{scale.scalevalue}</td>
           <td><button onClick={handleDelete}>Delete</button> </td>
        </tr> : null
        } 
       
       </tbody>
    </table>
        </div>
    );
};

export default CreatePage;