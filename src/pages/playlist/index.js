import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="Playlist" />

      <div>
        <span>Playlist</span>
        <h1>Lista 1</h1>
        <p>10 músicas</p>

        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th><img src={ClockIcon} alt="clock" /></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="plus" /></td>
          <td>Nome da música</td>
          <td>Nome do album</td>
          <td>Nome playlist</td>
          <td>3:36</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="plus" /></td>
          <td>Nome da música</td>
          <td>Nome do album</td>
          <td>Nome playlist</td>
          <td>3:36</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="plus" /></td>
          <td>Nome da música</td>
          <td>Nome do album</td>
          <td>Nome playlist</td>
          <td>3:36</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="plus" /></td>
          <td>Nome da música</td>
          <td>Nome do album</td>
          <td>Nome playlist</td>
          <td>3:36</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
