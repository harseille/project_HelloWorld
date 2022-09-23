import render from '../dom/render.js';

const store = {
  _store: {
    localCommon: {
      path: '',
      isShowModal: '',
      selectedTab: 'chart',
    },
    localMain: {
      selectedCardId: 0,
      category: 'title',
      keyword: '',
    },
    localMap: {
      isMapInitial: true,
    },
    localItinerary: {
      currentId: '',
      startId: 0,
      dragTarget: '',
      isShowNewScheuleCellBtn: false,
    },
    localNewTripSchedule: {
      isFilledAllModalInput: false,
      isActiveSelfNumberOfPeopleInputForm: false,
    },
    localNewScheduleCell: {
      editCellId: null,
      selectedItineraryId: '',
      info: {
        type: '',
        startTime: '',
        endTime: '',
        location: '',
        memo: '',
        todos: [],
      },
    },
    localDatePicker: {
      activeCalendar: '',
      currentDate: new Date(),
    },
    userInfo: {
      userId: null,
      email: '',
      name: '',
      nickname: '',
      profilePic: '',
    },
    tripSchedule: {
      tripScheduleId: 0,
      authorId: '',
      author: '',
      authorProfilePic: '',
      title: '',
      summary: '', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
      tripDays: 0,
      startDate: null, // * Date 객체
      endDate: null, // * Date 객체
      createdDate: new Date(),
      numberOfPeople: 0,
      coverImg: '',
      content: '',
      isLiked: false,
      likeCount: 0,
      commentCount: 0,
      itinerary: [],
    },
    viewTripSchedule: {
      tripScheduleId: 0,
      authorId: '',
      author: '',
      authorProfilePic: '',
      title: '',
      summary: '', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
      tripDays: 0,
      startDate: null, // * Date 객체
      endDate: null, // * Date 객체
      createdDate: null,
      numberOfPeople: 0,
      coverImg: '',
      content: '',
      isLiked: false,
      likeCount: 0,
      commentCount: 0,
      itinerary: [],
    },
    tripSchedules: [],
  },
  get state() {
    return this._store;
  },
  set state(newState) {
    this._store = { ...this._store, ...newState };
    // console.log('store');
    render();
  },

  clearState() {
    this.state = {
      localCommon: {
        path: '',
        isShowModal: '',
        selectedTab: 'chart',
      },
      localMain: {
        selectedCardId: 0,
      },
      localMap: {
        isMapInitial: true,
      },
      localItinerary: {
        currentId: '',
        startId: 0,
        dragTarget: '',
        isShowNewScheuleCellBtn: false,
      },
      localNewTripSchedule: {
        isFilledAllModalInput: false,
        isActiveSelfNumberOfPeopleInputForm: false,
      },
      localNewScheduleCell: {
        editCellId: null,
        selectedItineraryId: '',
        info: {
          type: '',
          startTime: '',
          endTime: '',
          location: '',
          memo: '',
          todos: [],
        },
      },
      localDatePicker: {
        activeCalendar: '',
        currentDate: new Date(),
      },
      userInfo: {
        userId: null,
        email: '',
        name: '',
        nickname: '',
        profilePic: '',
      },
      tripSchedule: {
        tripScheduleId: 0,
        authorId: '',
        author: '',
        authorProfilePic: '',
        title: '',
        summary: '', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
        tripDays: 0,
        startDate: null, // * Date 객체
        endDate: null, // * Date 객체
        createdDate: new Date(),
        numberOfPeople: 0,
        coverImg: '',
        content: '',
        isLiked: false,
        likeCount: 0,
        commentCount: 0,
        itinerary: [],
      },
      // viewTripSchedule: {
      //   tripScheduleId: 0,
      //   authorId: '',
      //   author: '',
      //   authorProfilePic: '',
      //   title: '',
      //   summary: '', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
      //   tripDays: 0,
      //   startDate: null, // * Date 객체
      //   endDate: null, // * Date 객체
      //   createdDate: null,
      //   numberOfPeople: 0,
      //   coverImg: '',
      //   content: '',
      //   isLiked: false,
      //   likeCount: 0,
      //   commentCount: 0,
      //   itinerary: [],
      // },
      tripSchedules: [],
    };
  },
};

export default store;
