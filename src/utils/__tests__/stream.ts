import { isAudioMuted, isVideoMuted } from '../stream';

let stream: any;

test('isAudioMuted', () => {
  stream = {
    getAudioTrack() {
      return { muted: false };
    },
  };
  expect(isAudioMuted(stream)).toBe(false);

  stream = {
    getAudioTrack() {
      return { muted: true };
    },
  };
  expect(isAudioMuted(stream)).toBe(true);

  stream = {
    getAudioTrack() {
      return {};
    },
  };
  expect(isAudioMuted(stream)).toBe(false);
});

test('isVideoMuted', () => {
  stream = {
    getVideoTrack() {
      return { muted: false };
    },
  };
  expect(isVideoMuted(stream)).toBe(false);

  stream = {
    getVideoTrack() {
      return { muted: true };
    },
  };
  expect(isVideoMuted(stream)).toBe(true);

  stream = {
    getVideoTrack() {
      return {};
    },
  };
  expect(isVideoMuted(stream)).toBe(false);
});
