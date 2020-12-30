import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { Color } from 'styles/helpers/color';
import Input from 'components/input';
import { BasicSettings } from 'types/setting';
import Btn from 'components/button';

type Props = BasicSettings & {
  isJoined: boolean;
  isPublished: boolean;
  updateSettings: (updatedSettings: Partial<BasicSettings>) => void;
  join?: () => void;
  leave?: () => void;
  publish?: () => void;
  unpublish?: () => void;
};

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
  > input {
    margin: 0 0 8px;
  }
  .action-panel {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Button = styled(Btn)`
  padding: 12px 16px;
  margin: 4px;
  border-radius: 2px;
  font-size: 0.85rem;
`;

const noop = () => {};

const Settings: FC<RTW.Div<Props>> = ({
  appId,
  channel,
  token,
  isJoined,
  isPublished,
  updateSettings,
  join = noop,
  leave = noop,
  publish = noop,
  unpublish = noop,
  ...rest
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateSettings({ [e.target.name]: e.target.value });
  return (
    <Card {...rest}>
      <label htmlFor="appId">App ID</label>
      <Input
        placeholder="App ID"
        value={appId}
        name="appId"
        id="appId"
        aria-label="appId"
        onChange={onChange}
      />
      <label htmlFor="channel">Channel</label>
      <Input
        placeholder="channel"
        value={channel}
        name="channel"
        id="channel"
        aria-label="channel"
        onChange={onChange}
      />
      <label htmlFor="token">Token</label>
      <Input
        placeholder="token"
        value={token}
        name="token"
        id="token"
        aria-label="token"
        onChange={onChange}
      />
      <div className="action-panel">
        <Button disabled={isJoined} primary onClick={join}>
          JOIN
        </Button>
        <Button disabled={!isJoined} primary onClick={leave}>
          LEAVE
        </Button>
        <Button disabled={!isJoined || isPublished} primary onClick={publish}>
          PUBLISH
        </Button>
        <Button disabled={!isPublished} primary onClick={unpublish}>
          UNPUBLISH
        </Button>
      </div>
    </Card>
  );
};

export default Settings;
