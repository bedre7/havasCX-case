import React, { useState, useEffect } from 'react';
import styles from '../styles/Dashboard.module.scss';
import SearchBar from './SearchBar';
import axios from 'axios';
import Card from './Card';
import Spinner from './Spinner';

export interface CardItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DashBoard = () => {
  const [allCards, setAllCards] = useState<CardItem[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardItem[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const CardsPanel = () => {
    if (filteredCards.length === 0)
      return <p className={styles.empty}>No cards matching your search</p>;

    return (
      <div className={styles.main}>
        {filteredCards.map((card: CardItem) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchCards = async () => {
      const URL = process.env.REACT_APP_URL;

      if (!URL) return;
      setIsFetching(true);

      try {
        const response = await axios.get(URL);
        const cardItems: CardItem[] = [];

        response.data.forEach((cardItem: CardItem) => {
          cardItems.push(cardItem);
        });

        setAllCards(cardItems);
        setFilteredCards(cardItems);
      } catch (err) {
        console.error(err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchCards();
  }, []);

  const searchHandler = (input: string) => {
    const filtered = allCards.filter((card: CardItem) =>
      card.body.includes(input)
    );
    setFilteredCards(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <SearchBar searchHandler={searchHandler} />
      </div>
      <p className={styles.resultLength}>
        Showing {filteredCards.length} results
      </p>
      {isFetching ? <Spinner /> : <CardsPanel />}
    </div>
  );
};

export default DashBoard;
