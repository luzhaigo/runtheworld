import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import SettingsForm from '..';

test('can type in the appId input', () => {
  const updateSettings = jest.fn();
  render(
    <SettingsForm
      appId=""
      token=""
      channel=""
      isJoined={false}
      isPublished={false}
      updateSettings={updateSettings}
    />,
  );
  const input = screen.getByLabelText('appId');
  userEvent.type(input, '789');
  expect(updateSettings).toHaveBeenCalledTimes(3);
});

test('can type in the channel input', () => {
  const updateSettings = jest.fn();
  render(
    <SettingsForm
      appId=""
      token=""
      channel=""
      isJoined={false}
      isPublished={false}
      updateSettings={updateSettings}
    />,
  );
  const input = screen.getByLabelText('channel');
  userEvent.type(input, '789');
  expect(updateSettings).toHaveBeenCalledTimes(3);
});

test('can type in the token input', () => {
  const updateSettings = jest.fn();
  render(
    <SettingsForm
      appId=""
      token=""
      channel=""
      isJoined={false}
      isPublished={false}
      updateSettings={updateSettings}
    />,
  );
  const input = screen.getByLabelText('token');
  userEvent.type(input, '789');
  expect(updateSettings).toHaveBeenCalledTimes(3);
});

describe('buttons status', () => {
  test('in the first time, join button will be enabled, others are disabled', () => {
    const updateSettings = jest.fn();
    render(
      <SettingsForm
        appId=""
        token=""
        channel=""
        isJoined={false}
        isPublished={false}
        updateSettings={updateSettings}
      />,
    );

    const joinButton = screen.getByText(/\bjoin\b/i);
    expect(joinButton).not.toBeDisabled();
    const leaveButton = screen.getByText(/\bleave\b/i);
    expect(leaveButton).toBeDisabled();
    const publishButton = screen.getByText(/\bpublish\b/i);
    expect(publishButton).toBeDisabled();
    const unpublishButton = screen.getByText(/\bunpublish\b/i);
    expect(unpublishButton).toBeDisabled();
  });

  test('when join the streaming, the leave button and unpublish button will be enabled, others will be disabled', () => {
    const updateSettings = jest.fn();
    render(
      <SettingsForm
        appId=""
        token=""
        channel=""
        isJoined
        isPublished
        updateSettings={updateSettings}
      />,
    );

    const joinButton = screen.getByText(/\bjoin\b/i);
    expect(joinButton).toBeDisabled();
    const leaveButton = screen.getByText(/\bleave\b/i);
    expect(leaveButton).not.toBeDisabled();
    const publishButton = screen.getByText(/\bpublish\b/i);
    expect(publishButton).toBeDisabled();
    const unpublishButton = screen.getByText(/\bunpublish\b/i);
    expect(unpublishButton).not.toBeDisabled();
  });

  test('when unpublished in the streaming, the leave and publish button are enabled, others will be disabled', () => {
    const updateSettings = jest.fn();
    render(
      <SettingsForm
        appId=""
        token=""
        channel=""
        isJoined
        isPublished={false}
        updateSettings={updateSettings}
      />,
    );

    const joinButton = screen.getByText(/\bjoin\b/i);
    expect(joinButton).toBeDisabled();
    const leaveButton = screen.getByText(/\bleave\b/i);
    expect(leaveButton).not.toBeDisabled();
    const publishButton = screen.getByText(/\bpublish\b/i);
    expect(publishButton).not.toBeDisabled();
    const unpublishButton = screen.getByText(/\bunpublish\b/i);
    expect(unpublishButton).toBeDisabled();
  });
});
