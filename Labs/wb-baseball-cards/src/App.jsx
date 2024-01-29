import playerData from './playerData.js';
import { useState } from 'react';

function BaseballCard(props) {
  const [ showPicture, togglePicture ] = useState(true);

  const toggleCard = () => {
    togglePicture(!showPicture);
  }

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  } else {
    const statsDisplay = [];

    for (const [key, value] of Object.entries(props.stats)) {
      statsDisplay.push(<p>{key}: {value}</p>);
    }

    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>Team: {props.team}</p>
        <p>Position: {props.position}</p>
        {statsDisplay}
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard 
      name={player.name} 
      team={player.team} 
      position={player.position} 
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));

  console.log(cards);
  
  return <>{cards}</>
}

export default App;
