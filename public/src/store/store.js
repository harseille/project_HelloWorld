import render from '../dom/render.js';

const store = {
  _store: {
    userInfo: {
      userid: 21,
      email: 'test@test.com',
      name: 'test',
      nickname: 'tester123',
      profilePic: '/assets/images/profile-mock.png',
    },
    isShowModal: '',
    isFilledAllModalInput: false,
    isShowNewScheuleCellBtn: false,
    selectedTab: 'chart',
    newScheduleCell: {
      scheduleId: '',
      info: {
        type: '',
        startTime: '',
        endTime: '',
        location: '',
        memo: '',
        todos: [],
      },
    },
    itinerary: {
      currentId: '',
      schedule: [
        { id: 1, country: '영국', date: '08.14', day: 'Sat' },
        { id: 2, country: '프랑스', date: '08.15', day: 'Sun' },
        { id: 3, country: '이태리', date: '08.16', day: 'Mon' },
        { id: 4, country: '체코', date: '08.17', day: 'Tue' },
        { id: 5, country: '체코', date: '08.17', day: 'Tue' },
      ],
    },
    tripSchedule: {
      isActiveSelfNumberOfPeopleInputForm: false,
      activeCalendar: '',
      currentDate: new Date(),

      title: '',
      summary: '베트남ㆍ3일', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
      startDate: null, // * Date 객체
      endDate: null, // * Date 객체
      createdDate: '2022.08.12',
      numberOfPeople: 1,
      coverImg: '',
      content: '',
      isLiked: false,
      likeCount: 69,
      commentCount: 12,
      itinerary: {
        currentId: '',
        startIdx: 1,
        schedule: [
          {
            id: 1,
            country: '영국',
            date: new Date('2022-08-14'),
            day: 'Sat',
            cells: [],
          },
          {
            id: 2,
            country: '프랑스',
            date: new Date('2022-08-15'),
            day: 'Sun',
            cells: [],
          },
          {
            id: 3,
            country: '인도',
            date: new Date('2022-08-16'),
            day: 'Sun',
            cells: [],
          },
          {
            id: 4,
            country: '이태리',
            date: new Date('2022-08-16'),
            day: 'Mon',
            cells: [],
          },
          {
            id: 5,
            country: '체코',
            date: new Date('2022-08-17'),
            day: 'Tue',
            cells: [],
          },
        ],
      },
    },
  },
  get state() {
    return this._store;
  },
  set state(newState) {
    this._store = { ...this._store, ...newState };
    console.log(this._store.newScheduleCell);
    render();
  },
};

export default store;
