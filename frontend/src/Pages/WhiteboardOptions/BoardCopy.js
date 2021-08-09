import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardCopy = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");
  const [creator, setCreator] = useState("");
  const [isLeading, setIsLeading] = useState("");
  const [soloDraw, setSoloDraw] = useState("");
  const [publicc, setPublicc] = useState("");
  const [type, setType] = useState("");
  const [displayName, setDisplayName] = useState("");

  const history = useHistory();

  const onBoardCopyClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardCopy",
        {
          apiKey: apiKey,
          boardId: boardId,
          creator: creator,
          isLeading: isLeading,
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
      <h1>Board Copy</h1>
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
        placeholder="string - the id of the board to modify"
      />
      <h5>creator</h5>
      <input
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
        placeholder="string - the id of the user to become the creator"
      />
      <h5>isLeading</h5>
      <input
        value={isLeading}
        onChange={(e) => setIsLeading(e.target.value)}
        placeholder="boolean"
      />
      <h5>soloDraw</h5>
      <input
        value={soloDraw}
        onChange={(e) => setSoloDraw(e.target.value)}
        placeholder="boolean - (optional))"
      />
      <h5>public</h5>
      <input
        value={publicc}
        onChange={(e) => setPublicc(e.target.value)}
        placeholder="boolean - (optional)"
      />
      <h5>type</h5>
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="(optional - Default: whiteboard)"
      />
      <h5>displayName</h5>
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="string - (optional) Sets the display name of the board"
      />
      <br />
      <button onClick={onBoardCopyClicked}>Enter</button>

      <button onClick={() => history.push("/boardOptions")}>
        Board Options
      </button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
