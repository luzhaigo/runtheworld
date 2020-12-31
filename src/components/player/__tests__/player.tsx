import React from 'react';
import { render, screen, createStream } from 'test-utils';
import userEvent from '@testing-library/user-event';
import Player from '..';

let stream: any;

beforeEach(() => {
  stream = createStream({
    video: true,
    audio: true,
    streamId: '12345',
    local: true,
  });
});

test('exists in the document', () => {
  render(<Player stream={stream} label="9876" />);

  expect(screen.getByText('9876')).toBeInTheDocument();
});

describe('isAudioMuted', () => {
  test('when isAudioMuted is falsy', () => {
    render(<Player stream={stream} label="9876" />);

    expect(screen.getByTestId('audio-unmuted')).toBeInTheDocument();
  });

  test('when isAudioMuted is false', () => {
    render(<Player stream={stream} label="9876" />);

    expect(screen.getByTestId('audio-unmuted')).toBeInTheDocument();
  });

  test('when isAudioMuted is true', () => {
    render(<Player stream={stream} label="9876" isAudioMuted />);

    expect(screen.getByTestId('audio-muted')).toBeInTheDocument();
  });
});

describe('isVideoMuted', () => {
  test('when isVideoMuted is falsy', () => {
    render(<Player stream={stream} label="9876" />);

    expect(screen.getByTestId('video-unmuted')).toBeInTheDocument();
  });

  test('when isVideoMuted is false', () => {
    render(<Player stream={stream} label="9876" />);

    expect(screen.getByTestId('video-unmuted')).toBeInTheDocument();
  });

  test('when isVideoMuted is true', () => {
    render(<Player stream={stream} label="9876" isVideoMuted />);

    expect(screen.getByTestId('video-muted')).toBeInTheDocument();
  });
});

test('onCameraClick', () => {
  const click = jest.fn();
  render(<Player stream={stream} label="9876" onCameraClick={click} />);

  expect(click).toHaveBeenCalledTimes(0);

  userEvent.click(screen.getByTestId('camera-button'));

  expect(click).toHaveBeenCalledTimes(1);
});

test('onMicrophoneClick', () => {
  const click = jest.fn();
  render(<Player stream={stream} label="9876" onMicrophoneClick={click} />);

  expect(click).toHaveBeenCalledTimes(0);

  userEvent.click(screen.getByTestId('microphone-button'));

  expect(click).toHaveBeenCalledTimes(1);
});
