import {
  Stream,
  StreamActionTypes,
  UPDATE_LOCAL_STREAM,
  UPDATE_REMOTE_STREAMS,
  CLEAR_ALL_STREAMS,
} from 'types/stream';

const initialState: {
  local: Stream | null;
  remote: Stream[];
  map: { [k in string]: any };
} = {
  local: null,
  remote: [],
  map: {},
};

export default (state = initialState, action: StreamActionTypes) => {
  switch (action.type) {
    case UPDATE_LOCAL_STREAM: {
      return {
        ...state,
        local: action.payload,
      };
    }
    case UPDATE_REMOTE_STREAMS: {
      return {
        ...state,
        remote: action.payload(state.remote),
      };
    }
    case CLEAR_ALL_STREAMS: {
      return initialState;
    }
    default:
      return state;
  }
};
