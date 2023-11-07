// AppRouter.jsx
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './components/Blog';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
