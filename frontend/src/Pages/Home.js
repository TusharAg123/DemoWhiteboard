import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Welcome to Limnu</h1>
        <hr />
        <button onClick={() => history.push("/userCreate")}>
          Create a new user
        </button>
        <button onClick={() => history.push("/userActive")}>
          Already an Existing User
        </button>
        <button onClick={() => history.push("/boardCreate")}>
          Create a Limnu Whiteboard
        </button>
        <button onClick={() => history.push("/boardOptions")}>
          More Whiteboard Options
        </button>
      </div>
    </div>
  );
};
