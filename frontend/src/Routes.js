import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CreateUser } from "./Pages/CreateUser";
import { ActiveUser } from "./Pages/ActiveUser";
import { CreateBoard } from "./Pages/CreateBoard";
import { BoardOptions } from "./Pages/WhiteboardOptions/BoardOptions";
import { BoardActive } from "./Pages/WhiteboardOptions/BoardActive";
import { BoardInfo } from "./Pages/WhiteboardOptions/BoardInfo";
import { BoardRole } from "./Pages/WhiteboardOptions/BoardRole";
import { BoardCopy } from "./Pages/WhiteboardOptions/BoardCopy";
import { BoardRename } from "./Pages/WhiteboardOptions/BoardRename";
import { BoardDelete } from "./Pages/WhiteboardOptions/BoardDelete";
import { BoardList } from "./Pages/WhiteboardOptions/BoardList";
import { BoardUsage } from "./Pages/WhiteboardOptions/BoardUsage";

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
        <Route path="/boardActive">
          <BoardActive />
        </Route>
        <Route path="/boardInfo">
          <BoardInfo />
        </Route>
        <Route path="/boardRole">
          <BoardRole />
        </Route>
        <Route path="/boardCopy">
          <BoardCopy />
        </Route>
        <Route path="/boardRename">
          <BoardRename />
        </Route>
        <Route path="/boardDelete">
          <BoardDelete />
        </Route>
        <Route path="/boardList">
          <BoardList />
        </Route>
        <Route path="/boardUsage">
          <BoardUsage />
        </Route>
      </Switch>
    </Router>
  );
};
