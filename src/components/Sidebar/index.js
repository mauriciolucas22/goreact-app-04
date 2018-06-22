import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as PlaylistsActions } from '../../store/ducks/playlist';


import { Container, NewPlaylist, Nav } from './styles';

import addPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  // executado assim o componente for renderizado em tela
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
