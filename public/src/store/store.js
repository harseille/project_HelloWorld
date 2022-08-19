const store = {
  _store: {},
  get state() {
    return this._store;
  },
  set state(newState) {
    this._store = { ...this._store, ...newState };
  },
};

export default store;
