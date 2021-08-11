import Iframe from "react-iframe";
import { board_url } from "./CreateBoard";
import { token_user } from "./CreateUser";
import { useHistory } from "react-router-dom";

//console.log(board_url, token_user);

export const LimnuBoard = () => {
  const history = useHistory();

  //const url = "https://apix.limnu.com/d/draw.html?b=B_MB708FkhQEypQc&";
  //const token =
  //"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIxNDc0ODM2NDcsInYiOjAsImQiOnsidWlkIjoibk9tS3RUbnp5eVRNTm53VVpHQ0ZvS0x0QW9VMiIsInByb3ZpZGVyIjoiZ2hvc3QiLCJjb250YWN0Ijoic3A0eHc5YWxya2ttQGdob3N0LmFwaXgubGltbnUuY29tIiwiZGlzcGxheU5hbWUiOiJ0YWdhZ2FnIn0sImlhdCI6MTYyODY2NzYyNH0.GKlfG1DqgEmyrHiVq7duk5T8Z1B7qnNa64tWDp1HfzU";

  let url = `${board_url}t=${token_user}`;
  return (
    <div>
      <div className="column">
        <div className="board-container">
          <h3>Board Options</h3>

          <button onClick={() => navigator.clipboard.writeText(url)}>
            copy Url
          </button>
          <br />
          <button onClick={() => history.push("/boardActive")}>
            boardActive
          </button>
          <br />
          <button onClick={() => history.push("/boardInfo")}>boardInfo</button>
          <br />
          <button onClick={() => history.push("/boardRole")}>boardRole</button>
          <br />
          <button onClick={() => history.push("/boardCopy")}>boardCopy</button>
          <br />
          <button onClick={() => history.push("/boardRename")}>
            boardRename
          </button>
          <br />
          <button onClick={() => history.push("/boardDelete")}>
            boardDelete
          </button>
          <br />
          <button onClick={() => history.push("/boardList")}>boardList</button>
          <br />
          <button onClick={() => history.push("/boardUsage")}>
            boardUsage
          </button>
          <br />
          <button onClick={() => history.push("/home")}>Home</button>
        </div>
      </div>
      <div className="column">
        <Iframe
          url={url}
          position="absolute"
          width="83%"
          id="myId"
          className="myClassname"
          height="100%"
          styles={{ height: "80px" }}
        />
      </div>
    </div>
  );
};
