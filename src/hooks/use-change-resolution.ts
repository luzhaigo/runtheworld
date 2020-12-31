import { useEffect } from 'react';
import { Stream } from 'types/stream';
import { usePrevious } from 'react-use';

export default (stream: Stream | null, resolution: string) => {
  const prevResolution = usePrevious(resolution);
  useEffect(() => {
    if (stream === null) return;
    if (prevResolution !== resolution && resolution) {
      stream.setVideoProfile(resolution);
    }
  }, [prevResolution, resolution]);
};
