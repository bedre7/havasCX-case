import React from 'react';
import { Playlist } from '../model/Playlist';

export interface IPlaylists {
  playlists: Playlist[];
}

export const PlaylistContext = React.createContext<IPlaylists>({
  playlists: [],
});