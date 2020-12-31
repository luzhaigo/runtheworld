import transformMediaDeviceInfo2Option from '../transform-media-device-info-to-option';

test('transformMediaDeviceInfo2Option', () => {
  const info = { deviceId: '1234', kind: 'audio', label: 'boot', x: 'x' };
  expect(transformMediaDeviceInfo2Option(info as any)).toEqual({
    kind: 'audio',
    label: 'boot',
    value: '1234',
  });
});
