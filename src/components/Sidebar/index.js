import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import addPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Sua Biblioteca</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbums</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos locais</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="">Melhores do ...</a>
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
