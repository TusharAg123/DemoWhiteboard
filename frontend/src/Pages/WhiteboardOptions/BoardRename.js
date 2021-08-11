import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardRename = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");
  const [boardName, setBoardName] = useState("");

  const history = useHistory();

  const onBoardRenameClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardRename",
        {
          apiKey: apiKey,
          boardId: boardId,
          boardName: boardName,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Board Rename</h1>
        <hr />
        <h5>apiKey</h5>
        <input
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="string - the private API key issued by Limnu"
        />
        <h5>boardId</h5>
        <input
          value={boardId}
          onChange={(e) => setBoardId(e.target.value)}
          placeholder="string - the id of the board you wish to rename"
        />
        <h5>redirectUrl</h5>
        <input
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder="string - the new name for the board"
        />
        <br />
        <button onClick={onBoardRenameClicked}>Enter</button>
        <button onClick={() => history.push("/boardOptions")}>
          Board Options
        </button>
        <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};
