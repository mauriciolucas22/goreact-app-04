import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume, Progress, Controls } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="album" />

      <div>
        <span>Playlist 1</span>
        <small>Arthist</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button><img src={ShuffleIcon} alt="Shuffle" /></button>
        <button><img src={BackwardIcon} alt="Backward" /></button>
        <button><img src={PlayIcon} alt="Play" /></button>
        <button><img src={ForwardIcon} alt="Forward" /></button>
        <button><img src={RepeatIcon} alt="Repeat" /></button>
      </Controls>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volumn" />
      <Slider
        railStyle={{ background: '#404040', borderRaius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
