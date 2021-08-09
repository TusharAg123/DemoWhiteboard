import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardActive = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");

  const history = useHistory();

  const onBoardActiveClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardActive",
        {
          apiKey: apiKey,
          boardId: boardId,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="content-container">
      <h1>Active Board</h1>
      <hr />
      <h5>apiKey</h5>
      <input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="string - the API key issued by Limnu"
      />
      <h5>boardId</h5>
      <input
        value={boardId}
        onChange={(e) => setBoardId(e.target.value)}
        placeholder="string - the id of the board to modify"
      />
      <br />
      <button onClick={onBoardActiveClicked}>Enter</button>
      <button onClick={() => history.push("/boardOptions")}>
        More Board Options
      </button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
