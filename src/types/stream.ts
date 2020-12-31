import type { Stream } from 'libs/agora-rtc-sdk';

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

export type StreamActionTypes =
  | UpdateLocalStreamAction
  | UpdateRemoteStreamsAction
  | ClearAllStreamsAction;
