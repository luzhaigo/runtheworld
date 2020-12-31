import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'styles/helpers/color';
import SettingsForm from 'components/settings-form';
import AdvancedSettingsForm from 'components/advanced-settings-form';
import { Mode, Codec, Resolution } from 'enums/settings';
import { Settings } from 'types/setting';
import AgoraRTC, { IClientWithPromise } from 'libs/agora-rtc-sdk';
import { ToastContainer, errToast, toast } from 'libs/react-toastify';
import Player from 'components/player';
import useUserMedia from 'hooks/use-user-media';
import transformMediaDeviceInfo2Option from 'utils/transform-media-device-info-to-option';
import useAgoraClientEvents from 'hooks/use-agora-client-events';
import useSwitchDevice from 'hooks/use-switch-device';
import useChangeResolution from 'hooks/use-change-resolution';
import { Container, Row as BSRow, Col } from 'react-bootstrap';
import { MediaBreakpoint } from 'styles/helpers/breakpoint';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

const Page = styled.div`
  height: 100%;
  background: ${Color['page-gray']};
`;

const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  padding-bottom: 36px;
  .advanced-settings {
    margin-top: 4px;
  }
  .local-player {
    margin-bottom: 8px;
  }
  .first-row {
    padding-top: 36px;
  }
  .remote-players {
    margin-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
    .remote-player {
      margin: 8px;
    }
    .remote-player:first-child {
      margin-left: 0px;
    }
    .remote-player:last-child {
      margin-left: 0px;
    }
  }
`;

const Row = styled(BSRow)<{ $reverse?: boolean }>`
  ${(props) =>
    props.$reverse &&
    css`
      ${MediaBreakpoint.down('sm')} {
        flex-flow: column-reverse;
      }
    `};
`;

const Toast = styled(ToastContainer)`
  z-index: 20000;
  top: 30px;
`;

const initialSettings = {
  appId: '3c8f8535f5ca4d23a2c6d550745c1141',
  channel: 'test',
  token:
    '00634e5cdd2dd0547368b549ddbc83f0f8bIACkfhrbesmd9668aeBOyy6JcLyW+lLG9svVCfSZS/AtCAx+f9gAAAAAEACZqwdIDMftXwEAAQAMx+1f',
  uid: '',
  camera: '',
  microphone: '',
  cameraResolution: Resolution.DEFAULT,
  mode: Mode.RTC,
  codec: Codec.VP8,
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
  const [isJoined, setIsJoined] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [client, setClient] = useState<IClientWithPromise | null>(null);
  const { local: localStream, remote: remoteStreams } = useSelector(
    (state: RootState) => state.stream,
  );
  useAgoraClientEvents(client);
  const { cameras, microphones } = useUserMedia(
    client,
    transformMediaDeviceInfo2Option,
  );
  useEffect(() => {
    if (!camera && cameras.length > 0) {
      updateSettings({
        camera:
          cameras.find((m) => m.value === 'default')?.value ?? cameras[0].value,
      });
    }
    if (!microphone && microphones.length > 0) {
      updateSettings({
        microphone:
          microphones.find((m) => m.value === 'default')?.value ??
          microphones[0].value,
      });
    }
  }, [cameras, microphones]);
  useSwitchDevice(localStream, { microphone, camera });
  useChangeResolution(localStream, cameraResolution);
  const updateSettings = (updatedSettings: Partial<Settings>) => {
    setSettings({ ...settings, ...updatedSettings });
  };
  return (
    <Page>
      <Content>
        <Container fluid>
          <Row className="first-row">
            <Col md={{ offset: 1, span: 10 }}>
              <Row $reverse>
                <Col md={6}>
                  <SettingsForm
                    appId={appId}
                    channel={channel}
                    token={token}
                    isJoined={isJoined}
                    isPublished={isPublished}
                    join={async () => {
                      if (!appId || !channel || !token) {
                        return errToast(
                          `please fill ${
                            [
                              { text: 'AppId', value: appId },
                              { text: 'Channel', value: channel },
                              { text: 'Token', value: token },
                            ].find((item) => !item.value)?.text
                          }`,
                        );
                      }
                      const client = AgoraRTC.createClient({ mode, codec });
                      if (!appId || !channel || !token) return;
                      setClient(client);
                      try {
                        await client.init(appId);
                        await client.join(
                          token,
                          channel,
                          uid === '' ? null : uid,
                        );
                        const stream = AgoraRTC.createStream({
                          streamID: uid || `local-user`,
                          video: true,
                          audio: true,
                          screen: false,
                          cameraId: camera || undefined,
                          microphoneId: microphone || undefined,
                        });
                        setIsJoined(true);
                        await stream.init();
                        await client.publish(stream);
                        setIsPublished(true);
                        toast(`join channel ${channel}`);
                      } catch (err) {
                        console.error(err);
                        errToast(err);
                        setClient(null);
                      }
                    }}
                    leave={async () => {
                      if (!localStream || !client) return;
                      try {
                        if (localStream.isPlaying()) {
                          localStream.stop();
                        }
                        localStream.close();
                        if (isPublished) {
                          await client.unpublish(localStream);
                        }
                        setIsPublished(false);
                        await client.leave();
                        setIsJoined(false);
                        setClient(null);
                        toast(`leave channel ${channel}`);
                      } catch (err) {
                        console.error(err);
                        errToast(err);
                      }
                    }}
                    publish={async () => {
                      if (!localStream || !client) return;
                      try {
                        await client.publish(localStream);
                        setIsPublished(true);
                        toast(`stream published ${localStream.getId()}`);
                      } catch (err) {
                        console.error(err);
                        errToast(err);
                      }
                    }}
                    unpublish={async () => {
                      if (!localStream || !client) return;
                      await client.unpublish(localStream);
                      setIsPublished(false);
                      toast(`stream unpublished ${localStream.getId()}`);
                    }}
                    updateSettings={updateSettings}
                  />
                  <AdvancedSettingsForm
                    className="advanced-settings"
                    uid={uid}
                    camera={camera}
                    cameraOptions={cameras}
                    microphone={microphone}
                    microphoneOptions={microphones}
                    cameraResolution={cameraResolution}
                    mode={mode}
                    codec={codec}
                    updateSettings={updateSettings}
                  />
                </Col>
                <Col md={6}>
                  {localStream && (
                    <Player
                      className="local-player"
                      stream={localStream}
                      label={localStream.getId() as string}
                      width="100%"
                      height="330"
                    />
                  )}
                  <div className="remote-players">
                    {remoteStreams.map((stream) => (
                      <Player
                        className="remote-player"
                        key={stream.getId()}
                        stream={stream}
                        label={stream.getId() as string}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Content>
      <Toast
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </Page>
  );
};

export default App;
