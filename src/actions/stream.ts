import {
  Stream,
  UPDATE_LOCAL_STREAM,
  UPDATE_REMOTE_STREAMS,
  CLEAR_ALL_STREAMS,
  UpdateLocalStreamAction,
  UpdateRemoteStreamsAction,
  ClearAllStreamsAction,
  MuteAudioByIdAction,
  UnmuteAudioByIdAction,
  MuteVideoByIdAction,
  UnmuteVideoByIdAction,
} from 'types/stream';
import { PeerAVEvent, PeerAVEventType } from 'types/peer-av-event';

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

export const muteAudioById = <T extends PeerAVEvent>(
  e: T,
): MuteAudioByIdAction => {
  return {
    type: PeerAVEventType.MuteAudio,
    payload: e,
  };
};

export const unmuteAudioById = <T extends PeerAVEvent>(
  e: T,
): UnmuteAudioByIdAction => {
  return {
    type: PeerAVEventType.UnmuteAudio,
    payload: e,
  };
};

export const muteVideoById = <T extends PeerAVEvent>(
  e: T,
): MuteVideoByIdAction => {
  return {
    type: PeerAVEventType.MuteVideo,
    payload: e,
  };
};

export const unmuteVideoById = <T extends PeerAVEvent>(
  e: T,
): UnmuteVideoByIdAction => {
  return {
    type: PeerAVEventType.UnmuteVideo,
    payload: e,
  };
};

export const clearAllStreams = (): ClearAllStreamsAction => ({
  type: CLEAR_ALL_STREAMS,
});
