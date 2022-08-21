import render from '../dom/render.js';

const store = {
  _store: {
    selectedTab: 'chart',
  },
  get state() {
    return this._store;
  },
  set state(newState) {
    this._store = { ...this._store, ...newState };
    render();
  },
};

export default store;
