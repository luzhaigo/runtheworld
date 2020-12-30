export default (info: MediaDeviceInfo) => {
  const { deviceId, kind, label } = info;
  return {
    kind,
    label,
    value: deviceId,
  };
};
