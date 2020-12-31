import type { Stream } from 'libs/agora-rtc-sdk';
import { PeerAVEventType, PeerAVEvent } from 'types/peer-av-event';

export type { Stream };

export const UPDATE_LOCAL_STREAM = 'UPDATE_LOCAL_STREAM';
export const UPDATE_REMOTE_STREAMS = 'UPDATE_REMOTE_STREAMS';
export const CLEAR_ALL_STREAMS = 'CLEAR_ALL_STREAMS';

export type UpdateLocalStreamAction = {
  type: typeof UPDATE_LOCAL_STREAM;
  payload: Stream | null;
};

export type UpdateRemoteStreamsAction = {
  type: typeof UPDATE_REMOTE_STREAMS;
  payload: (list: Stream[]) => Stream[];
};

export type ClearAllStreamsAction = {
  type: typeof CLEAR_ALL_STREAMS;
};

export type MuteAudioByIdAction = {
  type: PeerAVEventType.MuteAudio;
  payload: PeerAVEvent;
};

export type UnmuteAudioByIdAction = {
  type: PeerAVEventType.UnmuteAudio;
  payload: PeerAVEvent;
};

export type MuteVideoByIdAction = {
  type: PeerAVEventType.MuteVideo;
  payload: PeerAVEvent;
};

export type UnmuteVideoByIdAction = {
  type: PeerAVEventType.UnmuteVideo;
  payload: PeerAVEvent;
};

export type StreamActionTypes =
  | UpdateLocalStreamAction
  | UpdateRemoteStreamsAction
  | ClearAllStreamsAction
  | MuteAudioByIdAction
  | UnmuteAudioByIdAction
  | MuteVideoByIdAction
  | UnmuteVideoByIdAction;
