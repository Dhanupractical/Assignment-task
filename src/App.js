import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, Posts, Post } from './pages';
function App() {
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          {isLoggedIn ? <Redirect to={'/posts'} /> : <Home />}
        </Route>
        <Route exact path={'/posts'}>
          {!isLoggedIn ? <Redirect to={'/'} /> : <Posts />}
        </Route>
        <Route exact path={'/posts/:id'}>
          {!isLoggedIn ? <Redirect to={'/'} /> : <Post />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
