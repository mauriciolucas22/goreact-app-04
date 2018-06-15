import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://www.enorxistrosi.gr/wp-content/uploads/2017/05/vinyl-disc-wallpaper-5589.jpg" alt="album" />

      <div>
        <span>Playlist 1</span>
        <small>Arthist</small>
      </div>
    </Current>

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
