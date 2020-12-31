import { Stream } from 'types/stream';

export const isAudioMuted = (stream: Stream) =>
  !!(stream.getAudioTrack() as any)?.muted;
export const isVideoMuted = (stream: Stream) =>
  !!(stream.getVideoTrack() as any)?.muted;
