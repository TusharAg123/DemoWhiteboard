import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardInfo = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");
  const [leader, setLeader] = useState("");
  const [creator, setCreator] = useState("");
  const [soloDraw, setSoloDraw] = useState("");
  const [publicc, setPublicc] = useState("");
  const [type, setType] = useState("");
  const [displayName, setDisplayName] = useState("");

  const history = useHistory();

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

  return (
    <div className="content-container">
      <h1>Board Info</h1>
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
      <button onClick={onBoardInfoClicked}>Enter</button>
      <button onClick={() => history.push("/boardOptions")}>
        More Board Options
      </button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
