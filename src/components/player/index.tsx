import React, { FC, useState } from 'react';
import styled from 'styled-components';
import SP from 'agora-stream-player';
import { Stream } from 'libs/agora-rtc-sdk';
import Btn from 'components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  stream: Stream;
  label?: string;
  width?: string | number;
  height?: string | number;
};

const Container = styled.div<{ $width?: string }>`
  width: ${(props) => props.$width ?? '240px'};
  .actions {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    button:first-child {
      margin-right: 8px;
    }
    button:last-child {
      margin-left: 8px;
    }
  }
`;

const StreamPlayer = styled(SP)<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const Button = styled(Btn)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const isAudioMuted = (stream: Stream) =>
  !!(stream.getAudioTrack() as any)?.muted;
const isVideoMuted = (stream: Stream) =>
  !!(stream.getVideoTrack() as any)?.muted;

const Player: FC<RTW.Div<Props>> = ({
  stream,
  label,
  width,
  height,
  ...rest
}) => {
  if (typeof width === 'number') {
    width = `${width}`;
  }
  if (typeof height === 'number') {
    height = `${height}`;
  }
  if (width && !/(px|%)$/.test(width)) {
    width = `${width}px`;
  }
  if (height && !/(px|%)$/.test(height)) {
    height = `${height}px`;
  }
  const [audioMuted, setAudioMuted] = useState(isAudioMuted(stream));
  const [videoMuted, setVideoMuted] = useState(isVideoMuted(stream));
  return (
    <Container $width={width} {...rest}>
      <StreamPlayer
        stream={stream}
        label={label}
        $width={width}
        $height={height}
      />
      <div className="actions">
        <Button
          onClick={() => {
            if (audioMuted) {
              stream.unmuteAudio();
              setAudioMuted(false);
            } else {
              stream.muteAudio();
              setAudioMuted(true);
            }
          }}
        >
          <FontAwesomeIcon
            icon={audioMuted ? faMicrophoneSlash : faMicrophone}
          />
        </Button>
        <Button
          onClick={() => {
            if (videoMuted) {
              stream.unmuteVideo();
              setVideoMuted(false);
            } else {
              stream.muteVideo();
              setVideoMuted(true);
            }
          }}
        >
          <FontAwesomeIcon icon={videoMuted ? faVideoSlash : faVideo} />
        </Button>
      </div>
    </Container>
  );
};

export default Player;
