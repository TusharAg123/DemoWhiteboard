import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardDelete = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const history = useHistory();

  const onBoardDeleteClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardDelete",
        {
          apiKey: apiKey,
          boardId: boardId,
          redirectUrl: redirectUrl,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="content-container">
      <h1>Board Delete</h1>
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
        placeholder="string - the id of the board you wish to delete"
      />
      <h5>redirectUrl</h5>
      <input
        value={redirectUrl}
        onChange={(e) => setRedirectUrl(e.target.value)}
        placeholder="string - (Optional)"
      />
      <br />
      <button onClick={onBoardDeleteClicked}>Enter</button>
      <button onClick={() => history.push("/boardOptions")}>
        Board Options
      </button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
