import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {contacEdit} from './reducers'

const Edit = () => {
    const {whatever} = useParams();
    // console.log(whatever);
    const [input,setInput] = useState({name:"", number:"",email:""})
    const dispatch = useDispatch()
    const inputHandler =e=>{
        setInput({...input, [e.target.id] : e.target.value})
        
    }
    // console.log(input);
    const contact = useSelector(state =>state.contact)
    const submitHandler = (e)=>{
        e.preventDefault();

        // console.log(data);
        const editedItems = contact.map((item)=>{
                    const data = {
            id:parseInt(whatever),
            name: input.name,
            email: input.email,
            number: input.number,
        }
            console.log(item.id);
            console.log(whatever);

            if(parseInt(item.id) === parseInt(whatever)){
                return data

            }else{
                return item
            }
        })
       
        console.log(editedItems);

        dispatch(contacEdit(editedItems))
    }
    return ( 
        <div className="form">
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text"  id="name" onChange={inputHandler}/>
            <label htmlFor="number">Number</label>
            <input type="text"  id="number" onChange={inputHandler}/>
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" onChange={inputHandler}/>

            <button type="submit" className="submit">Submit</button>


        </form>





    </div>

     );
}
 
export default Edit;