import React, { FC } from 'react';
import styled from 'styled-components';
import SP from 'agora-stream-player';
import { Stream } from 'types/stream';
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
  isAudioMuted?: boolean;
  isVideoMuted?: boolean;
  onCameraClick?: () => void;
  onMicrophoneClick?: () => void;
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

const Player: FC<Props> = ({
  stream,
  label,
  width,
  height,
  isAudioMuted,
  isVideoMuted,
  onCameraClick,
  onMicrophoneClick,
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

  return (
    <Container $width={width} {...rest}>
      <StreamPlayer
        stream={stream}
        label={label}
        $width={width}
        $height={height}
      />
      <div className="actions">
        <Button onClick={onMicrophoneClick}>
          <FontAwesomeIcon
            icon={isAudioMuted ? faMicrophoneSlash : faMicrophone}
          />
        </Button>
        <Button onClick={onCameraClick}>
          <FontAwesomeIcon icon={isVideoMuted ? faVideoSlash : faVideo} />
        </Button>
      </div>
    </Container>
  );
};

export default Player;
