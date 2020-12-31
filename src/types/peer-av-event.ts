import { ReactText } from 'react';

export enum PeerAVEventType {
  UnmuteAudio = 'unmute-audio',
  MuteAudio = 'mute-audio',
  UnmuteVideo = 'unmute-video',
  MuteVideo = 'mute-video',
}

export type PeerAVEvent = {
  uid: ReactText;
  type: PeerAVEventType;
};
