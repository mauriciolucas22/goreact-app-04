import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as PlaylistDetailsActions } from '../ducks/playlistDetails';
import { Actions as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obetr os detalhes da playlist'));
  }
}
