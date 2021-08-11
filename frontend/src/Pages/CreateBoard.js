import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export var board_url = "";

export const CreateBoard = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardName, setBoardName] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [type, setType] = useState("");
  //const [disallowSharing, setDisallowSharing] = useState("");
  //const [whiteLabel, setWhiteLabel] = useState("");
  //const [isLeading, setIsLeadinge] = useState("");
  //const [soloDraw, setSoloDraw] = useState("");

  const history = useHistory();

  useEffect(() => {
    onCreateBoardClicked();
  });

  const onCreateBoardClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardCreate",
        {
          apiKey: apiKey,
          boardName: boardName,
          disallowSharing: false,
          whiteLabel: false,
          creatorId: creatorId,
          isLeading: false,
          soloDraw: false,
          type: type,
        }
      );

      const board_url = response.data.boardUrl;
      console.log(board_url);
      //console.log(response.data);
    } catch (error) {
      console.log(error.response_json);
    }
  };

  const onEnterClicked = () => {
    history.push("/limnuBoard");
  };

  return (
    <div className="page-container">
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

        <h5>creatorId</h5>
        <input
          value={creatorId}
          onChange={(e) => setCreatorId(e.target.value)}
          placeholder="string - (Optional)"
        />
        <h5>type</h5>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="whiteboard/blackboard/greaseboard"
        />
        {/*<h5>disallowSharing</h5>
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
      />*/}
        <br />
        <button
          onClick={() => {
            onCreateBoardClicked();
            onEnterClicked();
          }}
        >
          Enter
        </button>
        <button
          onClick={() => {
            onCreateBoardClicked();
          }}
        >
          console
        </button>
        <button onClick={() => history.push("/boardOptions")}>
          Whiteboard Options
        </button>
        <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};
