import './App.css';
 import {useState, useEffect} from 'react';
 import playerData from './data/data.json';
import Player from './components/player/Player';
import Cart from './components/Cart/Cart';

function App() {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() =>{
    setPlayer(playerData);
    console.log(playerData);
  },[])
  const addPlayer = (player) =>{
    const newCart = [...cart, player]
    setCart(newCart);
  }
  return (
    <div className="App">
      <Cart cart={cart}></Cart>
      {
        player.map(player => <Player player={player} key={player.id} addPlayer={addPlayer}></Player>)
      }
   
    </div>
  );
}

export default App;
