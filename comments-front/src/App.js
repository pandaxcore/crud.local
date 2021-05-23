// import logo from './logo.svg';
import './App.css';

import {Button} from 'react-bootstrap'
import Header from './Header'
import {BrowserRouter, Route} from 'react-router-dom'
import AddComment from './AddComment'
import UpdateComment from './UpdateComment'
import Login from './Login'
import Register from './Register'
import Protected from './Protected'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        
        {/* <h2>Comment Project</h2> */}

        <Route path="/add">
          <Protected Cmp={AddComment} />
          {/* <AddComment /> */}
        </Route>

        <Route path="/update">
          <Protected Cmp={UpdateComment} />
          {/* <UpdateComment /> */}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
