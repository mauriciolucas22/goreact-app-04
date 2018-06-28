import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as playlistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  /**
   * recebe mesmo parametro do router
   * /playlists/:id
   */
  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  render() {
    return (
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
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(playlistDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
