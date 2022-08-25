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
    selectedTab: 'chart',
    newScheduleCell: {
      type: '',
      startTime: '',
      endTime: '',
      location: '',
      memo: '',
      todos: [],
    },
    itinerary: {
      currentId: '',
      startId: 0,
      schedule: [
        { id: 1, country: '영국', date: '08.14', day: 'Sat' },
        { id: 2, country: '프랑스', date: '08.15', day: 'Sun' },
        { id: 3, country: '이태리', date: '08.16', day: 'Mon' },
        { id: 4, country: '체코', date: '08.17', day: 'Tue' },
        { id: 5, country: '그리스', date: '08.17', day: 'Tue' },
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
        schedule: [
          {
            id: 1,
            country: '영국',
            date: '08.14',
            day: 'Sat',
            cells: [
              {
                id: 1,
                type: '',
                startTime: '오후 08:00',
                endTime: '오후 10:00',
                location: '호이안 마을',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
              {
                id: 3,
                type: '',
                startTime: '오후 10:00',
                endTime: '오후 12:00',
                location: '숙소',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
            ],
          },
          {
            id: 2,
            country: '프랑스',
            date: '08.15',
            day: 'Sun',
            cells: [
              {
                id: 5,
                type: '',
                startTime: '오후 10:00',
                endTime: '오후 12:00',
                location: '숙소',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
            ],
          },
          {
            id: 2,
            country: '프랑스',
            date: '08.15',
            day: 'Sun',
            cells: [
              {
                type: '',
                startTime: '오후 08:00',
                endTime: '오후 10:00',
                location: '호이안 마을',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
              {
                type: '',
                startTime: '오후 10:00',
                endTime: '오후 12:00',
                location: '숙소',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
            ],
          },
          {
            id: 3,
            country: '이태리',
            date: '08.16',
            day: 'Mon',
            cells: [
              {
                type: '',
                startTime: '오후 08:00',
                endTime: '오후 10:00',
                location: '호이안 마을',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
              {
                type: '',
                startTime: '오후 10:00',
                endTime: '오후 12:00',
                location: '숙소',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
            ],
          },
          {
            id: 4,
            country: '체코',
            date: '08.17',
            day: 'Tue',
            cells: [
              {
                type: '',
                startTime: '오후 08:00',
                endTime: '오후 10:00',
                location: '호이안 마을',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
              {
                type: '',
                startTime: '오후 10:00',
                endTime: '오후 12:00',
                location: '숙소',
                memo: '',
                todos: [],
                article: {
                  picture:
                    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  content:
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
                },
              },
            ],
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
    render();
  },
};

export default store;
