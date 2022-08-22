import render from '../dom/render.js';

const store = {
  _store: {
    itinerary: {
      currentId: '',
      schedule: [
        { id: 1, country: '영국', date: '08.14', day: 'Sat' },
        { id: 2, country: '프랑스', date: '08.15', day: 'Sun' },
        { id: 3, country: '이태리', date: '08.16', day: 'Mon' },
        { id: 4, country: '체코', date: '08.17', day: 'Tue' },
      ],
    },
  },
  get state() {
    return this._store;
  },
  set state(newState) {
    this._store = { ...this._store, ...newState };
    console.log(this._store.itinerary.schedule);
    render();
  },
};

export default store;
