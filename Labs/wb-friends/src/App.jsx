import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  const addFriend = () => {
    setFriends([...friends, {picture: picture, name: name}]);
    setPicture("");
    setName("");
  }

  const friendInfo = friends.map((friend) => {
    return (
    <div key={friend.name}>
      <img src={friend.picture} alt="image not loaded"/>
      <span>{friend.name}</span>
    </div>
    )
  });

  useEffect(() => {
    axios.get("/api/friends").then((res) => {
      setFriends(res.data);
    })
  }, [])

  return (
    <div>
      <label>Picture:</label>
      <input id="picture" type="text" value={picture} onChange={e => setPicture(e.target.value)}></input>
      <label>Name:</label>
      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>

      <button onClick={addFriend}>Add Friend</button>

      {friendInfo}
    </div>
  )
}
