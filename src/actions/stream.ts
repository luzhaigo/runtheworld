import {
  Stream,
  UPDATE_LOCAL_STREAM,
  UPDATE_REMOTE_STREAMS,
  CLEAR_ALL_STREAMS,
  UpdateLocalStreamAction,
  UpdateRemoteStreamsAction,
  ClearAllStreamsAction,
} from 'types/stream';

export const updateLocalStream = (
  stream: Stream | null,
): UpdateLocalStreamAction => {
  return {
    type: UPDATE_LOCAL_STREAM,
    payload: stream,
  };
};

export const updateRemoteStreams = (
  func: (list: Stream[]) => Stream[],
): UpdateRemoteStreamsAction => {
  return {
    type: UPDATE_REMOTE_STREAMS,
    payload: func,
  };
};

export const clearAllStreams = (): ClearAllStreamsAction => ({
  type: CLEAR_ALL_STREAMS,
});
