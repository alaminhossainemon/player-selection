import React from 'react';
import './player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
    const {name, image, salary} = props.player;
    const addPlayer = props.addPlayer;
    return (
       <div className="container">
            <div className="playerInfo">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <h5>Salary:{salary}</h5>
            <button className="addBtn" onClick={() => addPlayer(props.player)}> <FontAwesomeIcon icon={faPlus} />Add</button>
            </div>
       </div>
    );
};

export default Player;