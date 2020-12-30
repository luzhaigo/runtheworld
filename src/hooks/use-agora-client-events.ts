import { useState, useEffect } from 'react';
import { IClientWithPromise, Stream } from 'libs/agora-rtc-sdk';
import { errToast, toast } from 'libs/react-toastify';

export default (client: IClientWithPromise | null) => {
  const [localStream, setLocalStream] = useState<Stream | null>(null);
  const [remoteStreams, setRemoteStreams] = useState<Stream[]>([]);
  useEffect(() => {
    if (!client) {
      setLocalStream(null);
      setRemoteStreams([]);
      return;
    }
    function removeRemoteStreamByUid(uid: string | number) {
      setRemoteStreams((list) => {
        const index = list.findIndex((s) => `${s.getId()}` === `${uid}`);
        const newList = [...list];
        if (index !== -1) {
          list[index].isPlaying() && list[index].stop();
          newList.splice(index, 1);
        }
        return newList;
      });
    }
    function addLocalStream(event: { stream: Stream }) {
      const { stream } = event;
      toast('local stream published');
      setLocalStream(stream);
    }
    function addRemoteStreams(event: { stream: Stream }) {
      const { stream } = event;
      toast(`new stream added ${stream.getId()}`);
      setRemoteStreams((list) => list?.concat(stream));
    }
    async function remoteStreamSub(event: { stream: Stream }) {
      const { stream } = event;
      await client?.subscribe(stream, {
        video: true,
        audio: true,
      });
      toast(`new stream subscribed ${stream.getId()}`);
    }
    function peerLeave(event: { uid: string; reason: string }) {
      const { uid, reason } = event;
      toast(`user ${uid} leave because of ${reason}`);
      removeRemoteStreamByUid(uid);
    }
    function removeRemoteStream(event: { stream: Stream }) {
      const { stream } = event;
      const uid = stream.getId();
      toast(`remote stream was removed ${uid}`);
      removeRemoteStreamByUid(uid);
    }
    function error(err: { type: 'error'; reason: any }) {
      console.error(err);
      errToast(err.reason);
    }
    client.on('stream-published', addLocalStream);
    client.on('stream-added', remoteStreamSub);
    client.on('stream-subscribed', addRemoteStreams);
    client.on('peer-leave', peerLeave);
    client.on('stream-removed', removeRemoteStream);
    client.on('error', error);
    return () => {
      client.off('stream-published', addLocalStream);
      client.off('stream-added', remoteStreamSub);
      client.off('stream-subscribed', addRemoteStreams);
      client.off('peer-leave', peerLeave);
      client.off('stream-removed', removeRemoteStream);
      client.off('error', error);
    };
  }, [client]);
  return {
    localStream,
    remoteStreams,
  };
};
