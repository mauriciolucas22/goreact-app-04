import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import addPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={addPlayListIcon} alt="addPlayList" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
