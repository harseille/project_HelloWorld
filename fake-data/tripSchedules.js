const tripSchedules = [
  {
    tripScheduleId: '1',
    author: '민홍손',
    authorProfilePic: '/assets/images/users/1/thumbnail.png',
    title: '런던 시내 한 구석에서 손흥민을 만났습니다',
    summary: '런던ㆍ4일', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
    startDate: new Date(2022, 7, 24), // * Date 객체
    endDate: new Date(2022, 7, 28), // * Date 객체
    createdDate: '2022.09.02',
    numberOfPeople: 3,
    tripDays: 4,
    coverImg: '/assets/images/tripSchedules/1/cover.png',
    content: '손흥민 선수가 사준 먹은 잉글리시 스타일 디~너 후기 남깁니다.',
    isLiked: false,
    likeCount: 7,
    commentCount: 8,
    itinerary: [
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
  {
    tripScheduleId: '2',
    author: '오똑똑',
    authorProfilePic: '/assets/images/profile6.png',
    title: '제주 핵심 명소 78곳 1분 요약',
    summary: '한국 - 5일',
    startDate: new Date(2022, 8, 25), // * Date 객체
    endDate: new Date(2022, 8, 29), // * Date 객체
    createdDate: '2022.09.02',
    numberOfPeople: 2,
    tripDays: 5,
    coverImg: '/assets/images/cover-jeju.jpg',
    content:
      '여행 기간은 한정적인데 가고 싶은 곳은 너무 많 아서 뭘 어디서부터 어떻게 해야 될지 모르겠다면 집중! 가고 싶은 제주 여행지들을 모두 모으고,...',
    isLiked: false,
    likeCount: 32,
    commentCount: 12,
    itinerary: [
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
    ],
  },
  {
    tripScheduleId: '2',
    author: '오똑똑',
    authorProfilePic: '/assets/images/profile6.png',
    title: '제주 핵심 명소 78곳 1분 요약',
    summary: '한국 - 5일',
    startDate: new Date(2022, 8, 25), // * Date 객체
    endDate: new Date(2022, 8, 29), // * Date 객체
    createdDate: '2022.09.02',
    numberOfPeople: 2,
    tripDays: 5,
    coverImg: '/assets/images/cover-jeju.jpg',
    content:
      '여행 기간은 한정적인데 가고 싶은 곳은 너무 많 아서 뭘 어디서부터 어떻게 해야 될지 모르겠다면 집중! 가고 싶은 제주 여행지들을 모두 모으고,...',
    isLiked: false,
    likeCount: 32,
    commentCount: 12,
    itinerary: [
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
    ],
  },
  {
    tripScheduleId: '2',
    author: '오똑똑',
    authorProfilePic: '/assets/images/profile6.png',
    title: '제주 핵심 명소 78곳 1분 요약',
    summary: '한국 - 5일',
    startDate: new Date(2022, 8, 25), // * Date 객체
    endDate: new Date(2022, 8, 29), // * Date 객체
    createdDate: '2022.09.02',
    numberOfPeople: 2,
    tripDays: 5,
    coverImg: '/assets/images/cover-jeju.jpg',
    content:
      '여행 기간은 한정적인데 가고 싶은 곳은 너무 많 아서 뭘 어디서부터 어떻게 해야 될지 모르겠다면 집중! 가고 싶은 제주 여행지들을 모두 모으고,...',
    isLiked: false,
    likeCount: 32,
    commentCount: 12,
    itinerary: [
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
    ],
  },
];

const mainTripSchedules = tripSchedules.map(
  ({ tripScheduleId, author, authorProfilePic, title, summary, coverImg, content, likeCount, commentCount }) => ({
    tripScheduleId,
    author,
    authorProfilePic,
    title,
    summary,
    coverImg,
    content,
    likeCount,
    commentCount,
  })
);

const findTripSchedule = id => tripSchedules.find(tripSchedule => tripSchedule.tripScheduleId === id);

module.exports = { mainTripSchedules, findTripSchedule };
