import { useState, useEffect } from 'react';
import AgoraRTC, { IClientWithPromise } from 'libs/agora-rtc-sdk';

const noTransform = (d: any) => d;
const tempClient = AgoraRTC.createClient({
  mode: 'live',
  codec: 'vp8',
});

export default (
  client: IClientWithPromise | null,
  transform?: (d: MediaDeviceInfo) => any,
) => {
  client = client ?? tempClient;
  transform = transform ?? noTransform;
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [microphones, setMicrophones] = useState<MediaDeviceInfo[]>([]);
  useEffect(() => {
    if (!client) return;
    async function onCameraChange() {
      if (!client) return;
      console.log('onCameraChange');
      try {
        const cameras = await client.getCameras();
        if (cameras.length) {
          setCameras(cameras);
        }
      } catch (err) {
        console.error(err.message);
        setCameras([]);
      }
    }
    async function onRecordingDeviceChange() {
      if (!client) return;
      console.log('onRecordingDeviceChange');
      try {
        const microphones = await client.getRecordingDevices();
        if (microphones.length) {
          setMicrophones(microphones);
        }
      } catch (err) {
        console.error(err.message);
        setMicrophones([]);
      }
    }
    client.on('camera-changed', onCameraChange);
    client.on('recording-device-changed', onRecordingDeviceChange);
    onCameraChange();
    onRecordingDeviceChange();
    return () => {
      client?.off('camera-changed', onCameraChange);
      client?.off('recording-device-changed', onRecordingDeviceChange);
    };
  }, [client]);
  return {
    cameras: cameras.filter((item) => !!item.deviceId).map(transform),
    microphones: microphones.filter((item) => !!item.deviceId).map(transform),
  };
};
