import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {contactUpdate} from './reducers'

const Form = () => {
    const [input,setInput] = useState({name:"", number:"",email:""})
    
    const inputHandler =e=>{
        setInput({...input, [e.target.id] : e.target.value})
        
    }

    const submitHandler = e=>{
        e.preventDefault();
        const data = {
            name:input.name,
            number: input.number,
            email:input.email,
            id: new Date().getTime()

        }
        
        dispatch(contactUpdate(data));
        setInput({name:"", number:"",email:""})
        
    }
        
 

    const dispatch = useDispatch()
    // console.log(input);
    return (  
        <div className="form">
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input value={input.name} type="text"  id="name" onChange={inputHandler}/>
                <label htmlFor="number">Number</label>
                <input value={input.number} type="text"  id="number" onChange={inputHandler}/>
                <label htmlFor="email">Email</label>
                <input value={input.email} type="email"  id="email" onChange={inputHandler}/>

                <button type="submit" className="submit">Submit</button>


            </form>





        </div>
    );
}
 
export default Form;