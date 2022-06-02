import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {contactDelete} from './reducers'

const Main = () => {
    const contact = useSelector(state =>state.contact)
    console.log(contact);
    const dispatch = useDispatch()

    // const editHandler = (id)=>{
    //   const editItem = 
    // }

    const deleteHandler = (id)=>{
      console.log(id);
      const newsItems = contact.filter((item)=> item.id !== id);
      console.log(newsItems);
      dispatch(contactDelete(newsItems))
    }
    
    return (  
        <div>
                  <div className="add-contact">
        <button><Link to="form">Add Contact</Link></button>
      </div>

      <table className="main-table">
        <thead>
        <tr className="header">
          <th>#</th>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          contact.map((item,index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td><button className="form-button" ><Link to={`/edit/${item.id}`}>Edit</Link></button></td>
                <td><button className="form-button" onClick={()=>deleteHandler(item.id)}>Delete</button></td>
              </tr>


            )
          })
        }
      </tbody>

      </table>
        </div>
    );
}
 
export default Main;