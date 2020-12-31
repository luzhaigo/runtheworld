import React, { FC, ReactElement } from 'react';
import { render, queries } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import colors from 'styles/colors';
import { MediaBreakpoint } from 'styles/breakpoints';
import { Provider } from 'react-redux';
import createStore from './create-store';
import * as customQueries from './custom-queries';

let store = createStore();

const AllTheProviders: FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={{ colors, MediaBreakpoint }}>
      {children}
    </ThemeProvider>
  </Provider>
);

const customRender = (ui: ReactElement, { state = {}, ...options } = {}) => {
  store = createStore(state);
  return {
    ...render(ui, {
      wrapper: AllTheProviders,
      queries: { ...queries, ...customQueries },
      ...options,
    }),
    store,
  };
};

export * from '@testing-library/react';

export { customRender as render };

export const createStream = ({
  video,
  audio,
  streamId,
  local,
  latency = '50',
}: any) => {
  const stream = {
    id: streamId,
    _hasVideo: video,
    _hasAudio: audio,
    local: local,
    video: video,
    audio: audio,
    latency: latency,
    playing: false,
    close() {
      return;
    },
    getStats(cb: Function) {
      if (this.local) {
        cb({
          audioSendBytes: this.latency,
          audioSendPackets: this.latency,
          audioSendPacketsLost: this.latency,
          videoSendBytes: this.latency,
          videoSendPackets: this.latency,
          videoSendPacketsLost: this.latency,
          videoSendFrameRate: this.latency,
          videoSendResolutionWidth: this.latency,
          videoSendResolutionHeight: this.latency,
          accessDelay: this.latency,
        });
      } else {
        cb({
          audioReceiveBytes: this.latency,
          audioReceivePackets: this.latency,
          audioReceivePacketsLost: this.latency,
          videoReceiveBytes: this.latency,
          videoReceivePackets: this.latency,
          videoReceivePacketsLost: this.latency,
          videoReceiveFrameRate: this.latency,
          videoReceiveDecodeFrameRate: this.latency,
          videoReceivedResolutionWidth: this.latency,
          videoReceivedResolutionHeight: this.latency,
          accessDelay: this.latency,
          endToEndDelay: this.latency,
          videoReceiveDelay: this.latency,
          audioReceiveDelay: this.latency,
        });
      }
    },
    setVideoProfile() {
      return;
    },
    init(onS: Function) {
      onS(this);
    },
    play() {
      this.playing = true;
    },
    disableVideo() {
      this.video = false;
    },
    disableAudio() {
      this.audio = false;
    },
    enableVideo() {
      this.video = true && this._hasVideo;
    },
    enableAudio() {
      this.audio = true && this._hasAudio;
    },
    on() {
      return;
    },
    getId() {
      return this.id;
    },
    stop() {
      this.video = false;
      this.audio = false;
      this.playing = false;
    },
    hasVideo() {
      return this._hasVideo;
    },
    hasAudio() {
      return this._hasAudio;
    },
    isVideoOn() {
      return this.video;
    },
    isAudioOn() {
      return this.audio;
    },
    isPlaying() {
      return this.playing;
    },
  };

  return stream;
};
