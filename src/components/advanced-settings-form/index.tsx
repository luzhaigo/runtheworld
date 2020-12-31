import React, { FC, ChangeEvent } from 'react';
import { Mode, Codec, Resolution } from 'enums/settings';
import styled from 'styled-components';
import { Color } from 'styles/helpers/color';
import Input from 'components/input';
import Select from 'components/dropdown-select';
import RadioButton from 'components/radio-button';
import { AdvancedSettings } from 'types/setting';

const Card = styled.div`
  width: 100%;
  padding: 24px;
  background-color: ${Color.white};
  border: 1px solid ${Color.timberwolf};
  border-radius: 4px;
  box-shadow: 0px 1px 1px 0px ${Color.timberwolf};
  > label {
    font-size: 0.75rem;
    color: ${Color.silver};
  }
  > input,
  .select {
    margin: 0 0 8px;
  }
  .radio-buttons {
    margin-bottom: 16px;
    > div {
      margin-right: 8px;
    }
  }
`;

type Option = {
  value: string;
  label: string;
};

type Props = AdvancedSettings & {
  cameraOptions: Option[];
  microphoneOptions: Option[];
  isPlaying?: boolean;
  updateSettings: (updatedSettings: Partial<AdvancedSettings>) => void;
};

const cameraResolutionOptions = [
  {
    label: 'default',
    value: Resolution.DEFAULT,
  },
  {
    label: '720p',
    value: Resolution._720P,
  },
  {
    label: '1080p',
    value: Resolution._1080P,
  },
];

const Settings: FC<RTW.Div<Props>> = ({
  uid,
  camera,
  mode,
  codec,
  cameraOptions,
  microphone,
  microphoneOptions,
  cameraResolution,
  isPlaying = false,
  updateSettings,
  ...rest
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateSettings({ [e.target.name]: e.target.value });
  const onChangeSelect = (name: string) => (options: Option[]) =>
    updateSettings({ [name]: options[0].value });
  return (
    <Card {...rest}>
      <h3>ADVANCED SETTINGS</h3>
      {isPlaying === false && (
        <>
          <label htmlFor="uid">UID</label>
          <Input
            value={uid}
            name="uid"
            id="uid"
            aria-label="uid"
            onChange={onChange}
            placeholder="uid"
          />
        </>
      )}
      {cameraOptions?.length > 0 && (
        <>
          <label>CAMERA</label>
          <Select
            placeholder="camera"
            className="select"
            options={cameraOptions}
            onChange={onChangeSelect('camera')}
            selectedOption={cameraOptions.find(
              (option) => option.value === camera,
            )}
          />
        </>
      )}
      {microphoneOptions?.length > 0 && (
        <>
          <label>MICROPHONE</label>
          <Select
            placeholder="microphone"
            className="select"
            options={microphoneOptions}
            onChange={onChangeSelect('microphone')}
            selectedOption={microphoneOptions.find(
              (option) => option.value === microphone,
            )}
          />
        </>
      )}
      <label>CAMERA RESOLUTION</label>
      <Select
        placeholder="camera resolution"
        className="select"
        options={cameraResolutionOptions}
        onChange={onChangeSelect('cameraResolution')}
        selectedOption={cameraResolutionOptions.find(
          (option) => option.value === cameraResolution,
        )}
      />
      {isPlaying === false && (
        <>
          <label>Mode</label>
          <div className="radio-buttons">
            <RadioButton
              label="rtc"
              value={Mode.RTC}
              name="mode"
              checked={Mode.RTC === mode}
              onChange={onChange}
            />
            <RadioButton
              label="live"
              value={Mode.LIVE}
              name="mode"
              checked={Mode.LIVE === mode}
              onChange={onChange}
            />
          </div>
          <label>CODEC</label>
          <div className="radio-buttons">
            <RadioButton
              label="vp8"
              value={Codec.VP8}
              name="codec"
              checked={Codec.VP8 === codec}
              onChange={onChange}
            />
            <RadioButton
              label="h264"
              value={Codec.H264}
              name="codec"
              checked={Codec.H264 === codec}
              onChange={onChange}
            />
          </div>
        </>
      )}
    </Card>
  );
};

export default Settings;
