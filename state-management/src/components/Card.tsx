import React, { useState } from 'react';
import { Playlist } from '../model/Playlist';
import styles from '../styles/Card.module.scss';
import starboy from '../assets/starboy.jpg';
import lighters from '../assets/lighters.jpg';
import theNights from '../assets/the-nights.jpg';
import glassAnimals from '../assets/glass-animals.jpg';

const Card: React.FC<Playlist> = (props) => {
  const images = new Map<string, string>([
    ['starboy', starboy],
    ['lighters', lighters],
    ['the-nights', theNights],
    ['glass-animals', glassAnimals],
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <img src={images.get(props.cover)} alt={props.title} />
      <div className={styles.details}>
        <h2>{props.title}</h2>
        {isExpanded && (
          <>
            <p>Album: {props.album}</p>
            <p>Duration: {props.duration}</p>
            <p>By {props.artist}</p>
          </>
        )}
        <button onClick={() => setIsExpanded((prevState) => !prevState)}>
          {isExpanded ? 'Hide' : 'Details'}
        </button>
      </div>
    </div>
  );
};

export default Card;
