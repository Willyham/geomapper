import {fromJS} from 'immutable';

const defaultState = fromJS({
  sidebar: {
    open: true,
    width: 300
  }
});

export default function reducer(state = defaultState, action) {
  return state;
}
