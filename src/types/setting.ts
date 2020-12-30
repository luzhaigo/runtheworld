import { Mode, Codec } from 'enums/settings';

export type BasicSettings = {
  appId: string;
  channel: string;
  token: string;
};

export type AdvancedSettings = {
  uid: string;
  camera: string;
  microphone: string;
  cameraResolution: string;
  mode: Mode;
  codec: Codec;
};

export type Settings = BasicSettings & AdvancedSettings;
