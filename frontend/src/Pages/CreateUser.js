import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateUser = () => {
  const [apiKey, setApiKey] = useState("");
  const [displayName, setDisplayName] = useState("");
  const history = useHistory();

  const onCreateUserClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/userCreate",
        {
          apiKey: apiKey,
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
      <h1>Create User</h1>
      <hr />
      <h5>apiKey</h5>
      <input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="private API key issued by Limnu"
      />
      <h5>displayName</h5>
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="string - the user’s displayed namee"
      />
      <br />
      <button onClick={onCreateUserClicked}>Enter</button>
      <button onClick={() => history.push("/userActive")}>Active User</button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
