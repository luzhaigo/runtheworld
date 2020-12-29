import React, { FC } from 'react';
import { Mode, Codec } from 'enums/settings';

export type AdvancedSettings = {
  uid: string;
  camera: string;
  microphone: string;
  cameraResolution: string;
  mode: Mode;
  codec: Codec;
};

type Props = AdvancedSettings & {
  updateSettings: (updatedSettings: Partial<AdvancedSettings>) => void;
};

const Settings: FC<Props> = () => {
  return <div></div>;
};

export default Settings;
