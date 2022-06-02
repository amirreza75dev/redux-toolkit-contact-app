import {useDispatch, useSelector} from 'react-redux'
import {contactUpdate} from './reducers'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Form from './Form'
import Main from './main'
import Edit from './Edit'
function App() {

  const dispatch=useDispatch()
  // dispatch(contactUpdate([5,6]))


  return (
    <Router>
    <div className="app">
      <nav className="navbar">
        <div><Link to="/">React redux contact app</Link></div>
      </nav>



      <Switch>
      <Route exact path = "/form">
        <Form />

      </Route>
      <Route exact path = "/">
        <Main />

      </Route>
      <Route exact path = "/edit/:whatever">
        <Edit />

      </Route>




    </Switch>
      

    </div>


    </Router>
  );
}

export default App;
