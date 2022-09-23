const eventBuffer = {
  _eventsBuffer: [],
  get events() {
    return this._eventsBuffer;
  },
  set events(event) {
    this._eventsBuffer.push(event);
  },
};

export default eventBuffer;
