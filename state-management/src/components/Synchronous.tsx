import React, { useContext } from 'react';
import Layout from './Layout';
import { PlaylistContext } from '../context/PlaylistContext';
import Card from './Card';

const Synchronous = () => {
  const { playlists } = useContext(PlaylistContext);

  return (
    <Layout header="Sync">
      <div className="card-container">
        {playlists.map((playlist) => (
          <Card key={playlist.id} {...playlist} />
        ))}
      </div>
    </Layout>
  );
};

export default Synchronous;
