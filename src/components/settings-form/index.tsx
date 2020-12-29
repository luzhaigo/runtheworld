import React, { FC } from 'react';

export type BasicSettings = {
  appId: string;
  channel: string;
  token: string;
};

type Props = BasicSettings & {
  updateSettings: (updatedSettings: Partial<BasicSettings>) => void;
};

const Settings: FC<Props> = () => {
  return <div></div>;
};

export default Settings;
