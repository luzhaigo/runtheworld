import {
  Stream,
  StreamActionTypes,
  UPDATE_LOCAL_STREAM,
  UPDATE_REMOTE_STREAMS,
  CLEAR_ALL_STREAMS,
} from 'types/stream';
import { PeerAVEventType } from 'types/peer-av-event';
import { isAudioMuted, isVideoMuted } from 'utils/stream';

type CustomStream = Stream & {
  isAudioMuted: boolean;
  isVideoMuted: boolean;
};

const initialState: {
  local: Stream | null;
  remote: Stream[];
  map: { [k in string]: CustomStream };
} = {
  local: null,
  remote: [],
  map: {},
};

const normalize = (list: Stream[]) =>
  list.reduce((acc, item) => {
    acc[item.getId()] = {
      ...item,
      isAudioMuted: isAudioMuted(item),
      isVideoMuted: isVideoMuted(item),
    };
    return acc;
  }, {} as { [k in string]: CustomStream });

export default (state = initialState, action: StreamActionTypes) => {
  switch (action.type) {
    case UPDATE_LOCAL_STREAM: {
      const list = action.payload
        ? state.remote.concat(action.payload)
        : state.remote;
      return {
        ...state,
        local: action.payload,
        map: normalize(list),
      };
    }
    case UPDATE_REMOTE_STREAMS: {
      const list = action.payload(state.remote);
      return {
        ...state,
        remote: list,
        map: normalize(state.local ? list.concat(state.local) : list),
      };
    }
    case PeerAVEventType.MuteAudio: {
      const stream = state.map[action.payload.uid];
      return {
        ...state,
        map: {
          ...state.map,
          [action.payload.uid]: {
            ...stream,
            isAudioMuted: true,
          },
        },
      };
    }
    case PeerAVEventType.UnmuteAudio: {
      const stream = state.map[action.payload.uid];
      return {
        ...state,
        map: {
          ...state.map,
          [action.payload.uid]: {
            ...stream,
            isAudioMuted: false,
          },
        },
      };
    }
    case PeerAVEventType.MuteVideo: {
      const stream = state.map[action.payload.uid];
      return {
        ...state,
        map: {
          ...state.map,
          [action.payload.uid]: {
            ...stream,
            isVideoMuted: true,
          },
        },
      };
    }
    case PeerAVEventType.UnmuteVideo: {
      const stream = state.map[action.payload.uid];
      return {
        ...state,
        map: {
          ...state.map,
          [action.payload.uid]: {
            ...stream,
            isVideoMuted: false,
          },
        },
      };
    }
    case CLEAR_ALL_STREAMS: {
      return initialState;
    }
    default:
      return state;
  }
};
