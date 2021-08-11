import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardList = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardList, setBoardList] = useState("");

  const history = useHistory();

  const onBoardUsageClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardList",
        {
          apiKey: apiKey,
          boardList: boardList,
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
        <h1>Board Usage</h1>
        <hr />
        <h5>apiKey</h5>
        <input
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="string - the API key issued by Limnu"
        />
        <h5>boardId</h5>
        <input
          value={boardList}
          onChange={(e) => setBoardList(e.target.value)}
          placeholder="string - the id of the board to modify"
        />
        <br />
        <button onClick={onBoardUsageClicked}>boardUsage</button>
        <button onClick={() => history.push("/boardOptions")}>
          More Board Options
        </button>
        <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};
