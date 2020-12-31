import { useEffect } from 'react';
import { Stream } from 'types/stream';
import { useDispatch } from 'react-redux';
import { updateLocalStream } from 'actions/stream';

export default (stream: Stream | null) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (stream === null) return;
    function playerStatusChange(evt: any) {
      console.log('playerStatusChange', evt);
      dispatch(updateLocalStream(stream));
    }
    stream.on('player-status-change', playerStatusChange);
  }, [stream]);
};
