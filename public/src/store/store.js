import render from '../dom/render.js';

const store = {
  _store: {
    isShowModal: 'newTripSchedulePopup',
    tripSchedule: {
      activeStartDateCalendar: false,
      activeEndDateCalendar: false,
      tripTitle: '',
      startDate: null,
      startDatePickerCurrentDate: new Date(),
      endDate: null,
      endDatePickerCurrentDate: new Date(),
      numberOfPeople: '',
    },
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
