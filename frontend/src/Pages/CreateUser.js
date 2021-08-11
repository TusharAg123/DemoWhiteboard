import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export var token_user = "";

export const CreateUser = () => {
  const [apiKey, setApiKey] = useState("");
  const [displayName, setDisplayName] = useState("");

  const history = useHistory();

  useEffect(() => {
    onCreateUserClicked();
  });

  const onCreateUserClicked = async () => {
    try {
      const response = await axios.post(
        "https://api.apix.limnu.com/v1/userCreate",
        {
          apiKey: apiKey,
          displayName: displayName,
        }
      );
      const token_user = response.data.token;
      console.log(token_user);
    } catch (error) {
      // console.log(error.response.data);
    }
  };

  const onEnterClicked = () => {
    history.push("/boardCreate");
  };

  return (
    <div className="page-container">
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
          placeholder="string - the user’s displayed name"
        />
        <br />
        <button
          onClick={() => {
            onCreateUserClicked();
            onEnterClicked();
          }}
        >
          Enter
        </button>
        <button
          onClick={() => {
            onCreateUserClicked();
          }}
        >
          console
        </button>
        {/*info.map((infos) => {
          return (
            <div>
              <h1>{infos.response}</h1>
            </div>
          );
        })*/}
        <button onClick={() => history.push("/userActive")}>Active User</button>
        <button onClick={() => history.push("/home")}>Back</button>
      </div>
    </div>
  );
};
