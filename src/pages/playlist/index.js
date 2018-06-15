import React from 'react';

import { Container, Header } from './styles';

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
  </Container>
);

export default Playlist;
