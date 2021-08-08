import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CreateUser } from "./Pages/CreateUser";
import { ActiveUser } from "./Pages/ActiveUser";
import { CreateBoard } from "./Pages/CreateBoard";
import { BoardOptions } from "./Pages/BoardOptions";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/userCreate">
          <CreateUser />
        </Route>
        <Route path="/userActive">
          <ActiveUser />
        </Route>
        <Route path="/boardCreate">
          <CreateBoard />
        </Route>
        <Route path="/boardOptions">
          <BoardOptions />
        </Route>
      </Switch>
    </Router>
  );
};
