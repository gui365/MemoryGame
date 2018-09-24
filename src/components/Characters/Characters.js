import React, { Component } from 'react';
import "./Characters.css";

const Characters = ({ id, image, selected }) => (
      <img className="character" key={id} src={image} data-selected={selected}/>
);

export default Characters;