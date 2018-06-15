import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="playlist" />
        <strong>Música bacana</strong>
        <p>Relaxe ao ouvir!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="playlist" />
        <strong>Música bacana</strong>
        <p>Relaxe ao ouvir!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="playlist" />
        <strong>Música bacana</strong>
        <p>Relaxe ao ouvir!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="playlist" />
        <strong>Música bacana</strong>
        <p>Relaxe ao ouvir!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
