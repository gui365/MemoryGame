import React, { Component } from 'react';
import "./Characters.css";

const Characters = ({ id, image, selected, checkWinLose }) => (
      <img className="character" key={id} src={image} selected={selected} onClick={() => checkWinLose(id)}/>
);

export default Characters;