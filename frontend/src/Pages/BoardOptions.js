import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardOptions = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");
  const [leader, setLeader] = useState("");
  const [creator, setCreator] = useState("");
  const [soloDraw, setSoloDraw] = useState("");
  const [publicc, setPublicc] = useState("");
  const [type, setType] = useState("");
  const [displayName, setDisplayName] = useState("");

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

  const onBoardInfoClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardInfo",
        {
          apiKey: apiKey,
          boardId: boardId,
          leader: leader,
          creator: creator,
          soloDraw: soloDraw,
          public: publicc,
          type: type,
          displayName: displayName,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const onBoardUsageClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardUsage",
        {
          apiKey: apiKey,
          boardId: boardId,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="content-container">
      <h1>More WhiteBoard Options</h1>
      <hr />
      <h5>apiKey</h5>
      <input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter api key"
      />
      <h5>boardId</h5>
      <input
        value={boardId}
        onChange={(e) => setBoardId(e.target.value)}
        placeholder="Enter board Id"
      />
      <h5>leader</h5>
      <input
        value={leader}
        onChange={(e) => setLeader(e.target.value)}
        placeholder="(Optional)"
      />
      <h5>creator</h5>
      <input
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
        placeholder="(Optional)"
      />
      <h5>soloDraw</h5>
      <input
        value={soloDraw}
        onChange={(e) => setSoloDraw(e.target.value)}
        placeholder="(Optional, defaults to false)"
      />
      <h5>public</h5>
      <input
        value={publicc}
        onChange={(e) => setPublicc(e.target.value)}
        placeholder="(Optional, defaults to false)"
      />
      <h5>type</h5>
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="(optional)"
      />
      <h5>displayName</h5>
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="string - (Optional)"
      />
      <br />
      <button onClick={onBoardActiveClicked}>boardActive</button>
      <button onClick={onBoardInfoClicked}>boardInfo</button>
      <button onClick={onBoardUsageClicked}>boardUsage</button>
      <br />
      <button onClick={() => history.push("/boardCreate")}>Create Board</button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
