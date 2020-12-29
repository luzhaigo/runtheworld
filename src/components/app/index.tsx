import React, { useState } from 'react';
import styled from 'styled-components';
import { MediaBreakpoint } from 'styles/helpers/breakpoint';
import SettingsForm, { BasicSettings } from 'components/settings-form';
import AdvancedSettingsForm, {
  AdvancedSettings,
} from 'components/advanced-settings-form';
import { Mode, Codec } from 'enums/settings';

const Page = styled.div`
  height: 100vh;
  max-width: 1280px;
  margin: auto;
`;

const Content = styled.div`
  padding: 3rem 1.5rem;
  ${MediaBreakpoint.down('md')} {
    padding: 0.5rem;
  }
`;

type Settings = BasicSettings & AdvancedSettings;
const initialSettings = {
  appId: '',
  channel: '',
  token: '',
  uid: '',
  camera: '',
  microphone: '',
  cameraResolution: '',
  mode: Mode.LIVE,
  codec: Codec.H264,
};

const App = () => {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const {
    appId,
    channel,
    token,
    uid,
    camera,
    microphone,
    cameraResolution,
    mode,
    codec,
  } = settings;
  const updateSettings = (updatedSettings: Partial<Settings>) => {
    setSettings({ ...settings, ...updatedSettings });
  };
  return (
    <Page>
      <Content>
        <SettingsForm
          appId={appId}
          channel={channel}
          token={token}
          updateSettings={updateSettings}
        />
        <AdvancedSettingsForm
          uid={uid}
          camera={camera}
          microphone={microphone}
          cameraResolution={cameraResolution}
          mode={mode}
          codec={codec}
          updateSettings={updateSettings}
        />
      </Content>
    </Page>
  );
};

export default App;
