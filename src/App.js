// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/Pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/Components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace></NewPlace>
          </Route>
          {/* <Redirect to="/"></Redirect> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
