import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const BoardRole = () => {
  const [apiKey, setApiKey] = useState("");
  const [boardId, setBoardId] = useState("");
  const [userId, setUserId] = useState("");
  const [mayAdmin, setMayAdmin] = useState("");
  const [enabled, setEnabled] = useState("");

  const history = useHistory();

  const onBoardRoleClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/boardRole",
        {
          apiKey: apiKey,
          boardId: boardId,
          userId: userId,
          mayAdmin: mayAdmin,
          enabled: enabled,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="content-container">
      <h1>Board Role</h1>
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
      <h5>userId</h5>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="string - the id of the user to modify"
      />
      <h5>mayAdmin</h5>
      <input
        value={mayAdmin}
        onChange={(e) => setMayAdmin(e.target.value)}
        placeholder="boolean - (optional)"
      />
      <h5>enabled</h5>
      <input
        value={enabled}
        onChange={(e) => setEnabled(e.target.value)}
        placeholder="boolean - (optional))"
      />
      <br />
      <button onClick={onBoardRoleClicked}>Enter</button>

      <button onClick={() => history.push("/boardOptions")}>
        Board Options
      </button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
