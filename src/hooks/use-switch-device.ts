import { useEffect } from 'react';
import { Stream } from 'types/stream';
import { usePrevious } from 'react-use';

const pfSwitchDevice = (
  stream: Stream,
  type: 'audio' | 'video',
  deviceId: string,
) =>
  new Promise((resolve, reject) => {
    stream.switchDevice(
      type,
      deviceId,
      (...args) => {
        console.log(`${type} switch success`);
        resolve(args);
      },
      (e) => {
        console.error(e);
        reject(e);
      },
    );
  });

export default (
  stream: Stream | null,
  { camera, microphone }: { microphone?: string; camera?: string },
) => {
  const prevCamera = usePrevious(camera);
  const prevMicrophone = usePrevious(microphone);
  useEffect(() => {
    async function switchDevice() {
      if (stream === null) return;
      if (prevMicrophone !== microphone && microphone) {
        (stream.getAudioTrack() as any)?.stop();
        await pfSwitchDevice(stream, 'audio', microphone);
      }
      if (prevCamera !== camera && camera) {
        (stream.getVideoTrack() as any)?.stop();
        await pfSwitchDevice(stream, 'video', camera);
      }
    }
    switchDevice();
  }, [camera, microphone, prevCamera, prevMicrophone]);
};
