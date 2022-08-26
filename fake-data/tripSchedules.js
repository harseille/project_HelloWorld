let tripSchedules = [
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
    tripScheduleId: '3',
    author: '백종원',
    authorProfilePic:
      'https://yt3.ggpht.com/ytc/AMLnZu98MEQvuszPd3pPRdkn47wibmrW81BeDYy3lj15pQ=s900-c-k-c0x00ffffff-no-rj',
    title: '돼지 갈비 찜 맛집을 찾아',
    summary: '한국 - 1일',
    startDate: new Date(2022, 8, 25), // * Date 객체
    endDate: new Date(2022, 8, 25), // * Date 객체
    createdDate: '2022.08.28',
    numberOfPeople: 2,
    tripDays: 1,
    coverImg: 'https://i.ytimg.com/vi/nfQpiuMAbuE/maxresdefault.jpg',
    content:
      '1군 - 무 / 2군 - 당근/버섯 / 3군 - 양파, 대파, 고추 갈비찜이 30~40분정도 끓으면 무를 먼저 넣어주세요. 무가 익었을때 2군 채소 당근을 넣어주시구요. 당근이 익을때쯤 마지막 고추와 양파를 넣어주심되요. 그리고 마지막 채소들을 넣고 10~15분정도 끓여주면 완성....',
    isLiked: false,
    likeCount: 2232,
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
    tripScheduleId: '4',
    author: '크라이',
    authorProfilePic: '/assets/images/profile3.png',
    title: '룩 룩 룩셈부르크 ',
    summary: '룩셈부르크 - 3일',
    startDate: new Date(2022, 9, 1), // * Date 객체
    endDate: new Date(2022, 9, 3), // * Date 객체
    createdDate: '2022.09.05',
    numberOfPeople: 4,
    tripDays: 3,
    coverImg:
      'https://images.unsplash.com/photo-1590337828257-b13c65643bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    content:
      '룩 룩 룩셈부르크 아 아 아리헨티나 자 같이 펼쳐보자 세계지도 너의 꿈들을 펼쳐보아라 자 어디 붙어있나 찾아보자 다같이 불러보자 룩셈부르크...',
    isLiked: false,
    likeCount: 4,
    commentCount: 2,
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

const mainTripSchedules = () =>
  tripSchedules.map(
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
const generateTripScheduleId = () => Math.max(...tripSchedules.map(tripSchedule => tripSchedule.tripScheduleId), 0) + 1;
const setTripSchdule = newTripSchedule => {
  const responseTripSchedule = { ...newTripSchedule, tripScheduleId: generateTripScheduleId() };
  tripSchedules = [...tripSchedules, responseTripSchedule];
  return responseTripSchedule;
};

module.exports = { mainTripSchedules, findTripSchedule, setTripSchdule };
