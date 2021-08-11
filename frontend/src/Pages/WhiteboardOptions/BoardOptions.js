import { useHistory } from "react-router-dom";

export const BoardOptions = () => {
  const history = useHistory();
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>WhiteBoard Options</h1>
        <hr />
        <button onClick={() => history.push("/boardActive")}>
          Board Active
        </button>
        <button onClick={() => history.push("/boardInfo")}>Board Info</button>
        <button onClick={() => history.push("/boardRole")}>Board Role</button>
        <button onClick={() => history.push("/boardCopy")}>Board Copy</button>
        <button onClick={() => history.push("/boardRename")}>
          Board Rename
        </button>
        <button onClick={() => history.push("/boardDelete")}>
          Board Delete
        </button>
        <button onClick={() => history.push("/boardList")}>Board List</button>
        <button onClick={() => history.push("/boardUsage")}>Board Usage</button>
        <button onClick={() => history.push("/boardCreate")}>
          Board Create
        </button>
        <br />
        <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};
