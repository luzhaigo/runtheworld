import AgoraRTC from 'agora-rtc-sdk';
import enhanceAgoraRTC from 'agoran-awe';

const enhancedAgoraRTC = enhanceAgoraRTC(AgoraRTC);
export type Stream = AgoraRTC.Stream;
export type Client = AgoraRTC.Client;
export default enhancedAgoraRTC;
export type IClientWithPromise = ReturnType<
  typeof enhancedAgoraRTC.createClient
>;
export type IStreamWithPromise = ReturnType<
  typeof enhancedAgoraRTC.createStream
>;
