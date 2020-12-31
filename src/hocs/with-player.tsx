import React, { FC, ComponentType } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stream } from 'types/stream';
import { RootState } from 'reducers';
import {
  muteAudioById,
  unmuteAudioById,
  muteVideoById,
  unmuteVideoById,
} from 'actions/stream';
import { PeerAVEventType } from 'types/peer-av-event';

type InjectedType = {
  isAudioMuted: boolean;
  isVideoMuted: boolean;
  onCameraClick: () => void;
  onMicrophoneClick: () => void;
};

const WithPlayer = <P extends InjectedType>(
  WrappedComponent: ComponentType<any>,
) => {
  const Component: FC<
    {
      className?: string;
      stream: Stream;
      label?: string;
      width?: string | number;
      height?: string | number;
    } & Omit<P, keyof InjectedType>
  > = ({ children, stream, ...rest }) => {
    const { isAudioMuted, isVideoMuted } = useSelector(
      (state: RootState) => state.stream.map[stream.getId()],
    );
    const dispatch = useDispatch();
    return (
      <WrappedComponent
        {...rest}
        stream={stream}
        isAudioMuted={isAudioMuted}
        isVideoMuted={isVideoMuted}
        onCameraClick={() => {
          const uid = stream.getId();
          if (isVideoMuted) {
            stream.unmuteVideo();
            dispatch(
              unmuteVideoById({ uid, type: PeerAVEventType.UnmuteVideo }),
            );
          } else {
            stream.muteVideo();
            dispatch(muteVideoById({ uid, type: PeerAVEventType.MuteVideo }));
          }
        }}
        onMicrophoneClick={() => {
          const uid = stream.getId();
          if (isAudioMuted) {
            stream.unmuteAudio();
            dispatch(
              unmuteAudioById({ uid, type: PeerAVEventType.UnmuteAudio }),
            );
          } else {
            stream.muteAudio();
            dispatch(muteAudioById({ uid, type: PeerAVEventType.MuteAudio }));
          }
          // workaround the issue https://github.com/AgoraIO/rtc-web-archive/issues/15
          if (isVideoMuted) {
            setTimeout(() => {
              stream.muteVideo();
              dispatch(muteVideoById({ uid, type: PeerAVEventType.MuteVideo }));
            }, 10);
          } else {
            setTimeout(() => {
              stream.unmuteVideo();
              dispatch(
                unmuteVideoById({ uid, type: PeerAVEventType.UnmuteVideo }),
              );
            }, 10);
          }
        }}
      >
        {children}
      </WrappedComponent>
    );
  };

  return Component;
};

export default WithPlayer;
