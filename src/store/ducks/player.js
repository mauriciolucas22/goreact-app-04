import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
};

const INITAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING,
};

export default function player(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };

    default:
      return state;
  }
}

export const Actions = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song },
  }),
};
