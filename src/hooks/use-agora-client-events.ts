import { useEffect } from 'react';
import { Stream } from 'types/stream';
import { IClientWithPromise } from 'libs/agora-rtc-sdk';
import { errToast, toast } from 'libs/react-toastify';
import { peerAVEvent } from 'types/peerAVEvent';
import { useDispatch } from 'react-redux';
import {
  updateLocalStream,
  updateRemoteStreams,
  clearAllStreams,
} from 'actions/stream';

export default (client: IClientWithPromise | null) => {
  const dispatch = useDispatch();
  const setLocalStream = (s: Stream | null) => dispatch(updateLocalStream(s));
  const setRemoteStreams = (func: (list: Stream[]) => Stream[]) =>
    dispatch(updateRemoteStreams(func));
  const removeRemoteStreamByUid = (uid: string | number) => {
    const func = (list: Stream[]) => {
      const index = list.findIndex((s) => `${s.getId()}` === `${uid}`);
      const newList = [...list];
      if (index !== -1) {
        list[index].isPlaying() && list[index].stop();
        newList.splice(index, 1);
      }
      return newList;
    };
    setRemoteStreams(func);
  };
  useEffect(() => {
    if (!client) {
      dispatch(clearAllStreams());
      return;
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
    function peerUnmuteAudio(e: peerAVEvent) {
      console.log('peerUnmuteAudio', e);
    }
    function peerMuteAudio(e: peerAVEvent) {
      console.log('peerMuteAudio', e);
    }
    function peerUnMuteVideo(e: peerAVEvent) {
      console.log('peerUnMuteVideo', e);
    }
    function peerMuteVideo(e: peerAVEvent) {
      console.log('peerMuteVideo', e);
    }
    client.on('stream-published', addLocalStream);
    client.on('stream-added', remoteStreamSub);
    client.on('stream-subscribed', addRemoteStreams);
    client.on('peer-leave', peerLeave);
    client.on('stream-removed', removeRemoteStream);
    client.on('unmute-audio', peerUnmuteAudio);
    client.on('mute-audio', peerMuteAudio);
    client.on('unmute-video', peerUnMuteVideo);
    client.on('mute-video', peerMuteVideo);
    client.on('error', error);
    return () => {
      client.off('stream-published', addLocalStream);
      client.off('stream-added', remoteStreamSub);
      client.off('stream-subscribed', addRemoteStreams);
      client.off('peer-leave', peerLeave);
      client.off('stream-removed', removeRemoteStream);
      client.off('unmute-audio', peerUnmuteAudio);
      client.off('mute-audio', peerMuteAudio);
      client.off('unmute-video', peerUnMuteVideo);
      client.off('mute-video', peerMuteVideo);
      client.off('error', error);
    };
  }, [client]);
};
