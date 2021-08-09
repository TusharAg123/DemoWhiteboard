import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const ActiveUser = () => {
  const [apiKey, setApiKey] = useState("");
  const [userId, setUserId] = useState("");
  const history = useHistory();

  const onActiveUserClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/userActive",
        {
          apiKey: apiKey,
          userId: userId,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="content-container">
      <h1>Active User</h1>
      <hr />
      <input
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter api key"
      />
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User Id"
      />
      <br />
      <button onClick={onActiveUserClicked}>Enter</button>
      <button onClick={() => history.push("/userCreate")}>Create User</button>
      <button onClick={() => history.push("/home")}>Back</button>
    </div>
  );
};
