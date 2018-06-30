import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as playlistDetailsActions } from '../../store/ducks/playlistDetails';
import { Actions as PlayerActions } from '../../store/ducks/player';

import Loading from '../../components/Loading';

import { Container, Header, SongList, SongItem } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
        }),
      }),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  };

  state = {
    selectedSound: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  /**
   * recebe mesmo parametro do router
   * /playlists/:id
   */
  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistDetails } = this.props;

    return (
      <Container>
        <Header>
          <img src={playlistDetails.data.thumbnail} alt={playlistDetails.data.title} />

          <div>
            <span>Playlist</span>
            <h1>{playlistDetails.data.title}</h1>
            { !!playlistDetails.data.songs && <p>{playlistDetails.data.songs.length} músicas</p> }

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
            {!playlistDetails.data.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlistDetails.data.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSound: song.id })}
                  onDoubleClick={() => this.props.loadSong(song, playlistDetails.data.songs)}
                  selected={this.state.selectedSound === song.id}
                  playing={this.props.currentSong && this.props.currentSong.id == song.id}
                >
                  <td><img src={PlusIcon} alt="plus" /></td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:36</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ?
      (
        <Container loading>
          <Loading />
        </Container>
      ) : this.renderDetails();
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    ...playlistDetailsActions,
    ...PlayerActions,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
