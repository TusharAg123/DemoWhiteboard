import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateBoard = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardName, setBoardName] = useState("");
  const [disallowSharing, setDisallowSharing] = useState("");
  const [whiteLabel, setWhiteLabel] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [isLeading, setIsLeadinge] = useState("");
  const [soloDraw, setSoloDraw] = useState("");
  const [type, setType] = useState("");

  const history = useHistory();

  const onCreateBoardClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardCreate",
        {
          apiKey: apiKey,
          boardName: boardName,
          disallowSharing: disallowSharing,
          whiteLabel: whiteLabel,
          creatorId: creatorId,
          isLeading: isLeading,
          soloDraw: soloDraw,
          type: type,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="content-container">
      <h1>Create Board</h1>
      <hr />
      <h5>apiKey</h5>
      <input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter api key"
      />
      <h5>boardName</h5>
      <input
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Enter board name"
      />
      <h5>disallowSharing</h5>
      <input
        value={disallowSharing}
        onChange={(e) => setDisallowSharing(e.target.value)}
        placeholder="(Optional, defaults to false)"
      />
      <h5>whiteLabel</h5>
      <input
        value={whiteLabel}
        onChange={(e) => setWhiteLabel(e.target.value)}
        placeholder="(Optional, defaults to false)"
      />
      <h5>creatorId</h5>
      <input
        value={creatorId}
        onChange={(e) => setCreatorId(e.target.value)}
        placeholder="string - (Optional)"
      />
      <h5>isLeading</h5>
      <input
        value={isLeading}
        onChange={(e) => setIsLeadinge(e.target.value)}
        placeholder="(Optional, defaults to false)"
      />
      <h5>soloDraw</h5>
      <input
        value={soloDraw}
        onChange={(e) => setSoloDraw(e.target.value)}
        placeholder="(Optional, defaults to false)"
      />
      <h5>type</h5>
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="(optional, default to whiteboard)"
      />
      <br />
      <button onClick={onCreateBoardClicked}>Enter</button>
      <button onClick={() => history.push("/boardOptions")}>
        Whiteboard Options
      </button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
