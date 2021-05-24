// import logo from './logo.svg';
import './App.css';

import {Button} from 'react-bootstrap'
import Header from './Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddPost from './AddPost'
import UpdateComment from './UpdateComment'
import Login from './Login'
import Register from './Register'
import Protected from './Protected'
import PostList from './PostList'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route path="/add">
            <Protected Cmp={AddPost} />
          </Route>

          <Route path="/update">
            <Protected Cmp={UpdateComment} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Protected Cmp={PostList} />
          </Route>
          
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
