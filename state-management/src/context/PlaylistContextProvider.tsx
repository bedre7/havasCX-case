import React from 'react';
import { PlaylistContext } from './PlaylistContext';
import playlists from './playlist.json';

const PlaylistContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <PlaylistContext.Provider
      value={{
        playlists,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
