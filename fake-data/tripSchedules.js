const tripSchedules = [
  {
    tripScheduleId: '1',
    author: 'eunjin33',
    authorProfilePic: '/public/assets/images/profile1.png',
    title: '겨울 제주도 2박3일 여행',
    summary: '4일', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
    startDate: new Date(2022, 01, 01), // * Date 객체
    endDate: new Date(2022, 01, 03), // * Date 객체
    createdDate: '2022.02.02',
    numberOfPeople: 3,
    coverImg: '/public/assets/images/cover-jeju.jpg',
    content: '겨울 제주도도 볼게 이렇게나 많지요',
    isLiked: false,
    likeCount: 14,
    commentCount: 8,
    itinerary: {
      schedule: [
        {
          id: 1,
          country: '한국',
          date: new Date('2022-01-01'),
          day: 'Sat',
          cells: [
            {
              type: '',
              startTime: '오전 08:00',
              endTime: '오전 09:00',
              location: '인천국제 공항',
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
          country: '한국',
          date: new Date('2022-01-02'),
          day: 'Sun',
          cells: [],
        },
        {
          id: 3,
          country: '한국',
          date: new Date('2022-01-03'),
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
      ],
    },
  },
];

const findTripSchedule = id => tripSchedules.find(tripSchedule => tripSchedule.tripScheduleId === id);

module.exports = { findTripSchedule };
