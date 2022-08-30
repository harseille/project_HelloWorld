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
    ],
  },
  {
    tripScheduleId: '5',
    authorId: 1,
    author: 'blahblah',
    authorProfilePic: '/assets/images/users/1/thumbnail.png',
    title: '역삼역',
    summary: '',
    tripDays: 2,
    startDate: '2022-08-31',
    endDate: '2022-09-01',
    createdDate: '2022-08-29T06:45:40.961Z',
    numberOfPeople: '4',
    coverImg:
      'https://file.namu.moe/file/2b148a12781c0ce0bbd4e876e8bf5afa0a3fdc00c8e1d6a24c91b6872413f98b5f2fb45f06fcb82bab2a162b8444ddee',
    content: '기러기 토마토 스위스 인도인 별똥별 우영우 역삼역?!',
    isLiked: false,
    likeCount: 0,
    commentCount: 0,
    itinerary: [
      {
        id: 1,
        country: '대한민국서울특별시서초구강남대로',
        date: '2022-08-30T15:00:00.000Z',
        cells: [
          {
            id: 1,
            type: 'transportation',
            startTime: '07:00',
            endTime: '08:00',
            location: {
              adr_address:
                '<span class="country-name">대한민국</span> <span class="region">서울특별시</span> <span class="locality">강남구</span> <span class="street-address">역삼1동 737</span> <span class="postal-code">135-080</span>',
              formatted_address: '대한민국 서울특별시 강남구 역삼1동 737',
              geometry: {
                location: {
                  lat: 37.5007694,
                  lng: 127.0368262,
                },
                viewport: {
                  south: 37.49942041970851,
                  west: 127.0354772197085,
                  north: 37.50211838029151,
                  east: 127.0381751802915,
                },
              },
              name: '대한민국 서울특별시 강남구 역삼1동 역삼역(2호선)',
              html_attributions: [],
              latLng: {
                lat: 37.5007694,
                lng: 127.0368262,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 2,
            type: 'sightseeing',
            startTime: '08:00',
            endTime: '09:00',
            location: {
              adr_address:
                '<span class="country-name">대한민국</span> <span class="region">서울특별시</span> <span class="locality">서초구</span> <span class="street-address">서초동 서초대로 335 지하</span> <span class="postal-code">137-070</span>',
              formatted_address: '대한민국 서울특별시 서초구 서초동 서초대로 335 지하',
              geometry: {
                location: {
                  lat: 37.49366320000001,
                  lng: 127.0136771,
                },
                viewport: {
                  south: 37.49231421970851,
                  west: 127.0123281197085,
                  north: 37.49501218029151,
                  east: 127.0150260802915,
                },
              },
              name: '대한민국 서울특별시 서초구 서초동 서초대로 교대역(3호선)',
              html_attributions: [],
              latLng: {
                lat: 37.49366320000001,
                lng: 127.0136771,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 3,
            type: 'etc',
            startTime: '09:00',
            endTime: '10:00',
            location: {
              adr_address:
                '<span class="country-name">대한민국</span> <span class="region">서울특별시</span> <span class="locality">서초구</span> <span class="street-address">강남대로</span> <span class="postal-code">137-130</span>',
              formatted_address: '대한민국 서울특별시 서초구 강남대로',
              geometry: {
                location: {
                  lat: 37.4828196,
                  lng: 127.0360477,
                },
                viewport: {
                  south: 37.4814706197085,
                  west: 127.0346987197085,
                  north: 37.4841685802915,
                  east: 127.0373966802915,
                },
              },
              name: '대한민국 서울특별시 서초구 강남대로 신분당선 양재역 8번출구',
              html_attributions: [],
              latLng: {
                lat: 37.4828196,
                lng: 127.0360477,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 2,
        country: '',
        date: '2022-08-31T15:00:00.000Z',
        cells: [],
      },
    ],
    newScheduleCellDate: '2022-08-30T15:00:00.000Z',
  },
  {
    tripScheduleId: '6',
    authorId: 3,
    author: 'Benja',
    authorProfilePic: '/assets/images/users/3/thumbnail.png',
    title: '[헬싱키 비교체험] 초호화 사우나 VS 무료 사우나',
    summary: '',
    tripDays: 2,
    startDate: '2022-09-03T00:00:00.000Z',
    endDate: '2022-09-04T00:00:00.000Z',
    createdDate: '2022-08-30T01:17:00.067Z',
    numberOfPeople: '2',
    coverImg: '',
    content: '',
    isLiked: false,
    likeCount: 0,
    commentCount: 0,
    itinerary: [
      {
        id: 1,
        country: '핀란드',
        date: '2022-09-02T15:00:00.000Z',
        cells: [
          {
            id: 1,
            type: 'transportation',
            startTime: '09:00',
            endTime: '13:00',
            location: {
              adr_address:
                '<span class="street-address">Lootsi 13</span>, <span class="postal-code">15051</span> <span class="locality">Tallinn</span>, <span class="country-name">에스토니아</span>',
              formatted_address: 'Lootsi 13, 15051 Tallinn, 에스토니아',
              geometry: {
                location: {
                  lat: 59.4433148,
                  lng: 24.7671951,
                },
                viewport: {
                  south: 59.44196581970849,
                  west: 24.7658461197085,
                  north: 59.44466378029151,
                  east: 24.76854408029151,
                },
              },
              name: 'SIXT Autorent Tallinn | Tallinn Ferry Terminal D (Meet&Greet), Lootsi, 탈린 에스토니아',
              html_attributions: [],
              latLng: {
                lat: 59.4433148,
                lng: 24.7671951,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 2,
            type: 'sightseeing',
            startTime: '14:00',
            endTime: '15:00',
            location: {
              adr_address:
                '<span class="street-address">Unioninkatu 29</span>, <span class="postal-code">00170</span> <span class="locality">Helsinki</span>, <span class="country-name">핀란드</span>',
              formatted_address: 'Unioninkatu 29, 00170 Helsinki, 핀란드',
              geometry: {
                location: {
                  lat: 60.1704191,
                  lng: 24.9521651,
                },
                viewport: {
                  south: 60.16896321970849,
                  west: 24.95005955,
                  north: 60.1716611802915,
                  east: 24.95314775,
                },
              },
              name: '핀란드 헬싱키 Unioninkatu, 헬싱키 대성당',
              html_attributions: [],
              latLng: {
                lat: 60.1704191,
                lng: 24.9521651,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 3,
            type: 'accomodation',
            startTime: '17:00',
            endTime: '24:00',
            location: {
              adr_address:
                '<span class="street-address">Kalevankatu 3 B</span>, <span class="postal-code">00100</span> <span class="locality">Helsinki</span>, <span class="country-name">핀란드</span>',
              formatted_address: 'Kalevankatu 3 B, 00100 Helsinki, 핀란드',
              geometry: {
                location: {
                  lat: 60.16799569999999,
                  lng: 24.9394641,
                },
                viewport: {
                  south: 60.16651756970849,
                  west: 24.9380655197085,
                  north: 60.1692155302915,
                  east: 24.94076348029151,
                },
              },
              name: '핀란드 헬싱키 Kalevankatu, 호텔 핀',
              html_attributions: [],
              latLng: {
                lat: 60.16799569999999,
                lng: 24.9394641,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 2,
        country: '핀란드',
        date: '2022-09-03T15:00:00.000Z',
        cells: [
          {
            id: 4,
            type: 'etc',
            startTime: '10:00',
            endTime: '13:00',
            location: {
              adr_address:
                '<span class="street-address">Katajanokanlaituri 2</span>, <span class="postal-code">00160</span> <span class="locality">Helsinki</span>, <span class="country-name">핀란드</span>',
              formatted_address: 'Katajanokanlaituri 2, 00160 Helsinki, 핀란드',
              geometry: {
                location: {
                  lat: 60.166788,
                  lng: 24.959462,
                },
                viewport: {
                  south: 60.1655575197085,
                  west: 24.9582836197085,
                  north: 60.16825548029151,
                  east: 24.9609815802915,
                },
              },
              name: '핀란드 헬싱키 Katajanokanlaituri, 스카이휠 헬싱키',
              html_attributions: [],
              latLng: {
                lat: 60.166788,
                lng: 24.959462,
              },
            },
            memo: '헬싱키 vip 사우나',
            todos: [],
            article: {},
          },
          {
            id: 5,
            type: 'accomodation',
            startTime: '00:00',
            endTime: '09:00',
            location: {
              adr_address:
                '<span class="street-address">Kalevankatu 3 B</span>, <span class="postal-code">00100</span> <span class="locality">Helsinki</span>, <span class="country-name">핀란드</span>',
              formatted_address: 'Kalevankatu 3 B, 00100 Helsinki, 핀란드',
              geometry: {
                location: {
                  lat: 60.16799569999999,
                  lng: 24.9394641,
                },
                viewport: {
                  south: 60.16651756970849,
                  west: 24.9380655197085,
                  north: 60.1692155302915,
                  east: 24.94076348029151,
                },
              },
              name: '핀란드 헬싱키 Kalevankatu, 호텔 핀',
              html_attributions: [],
              latLng: {
                lat: 60.16799569999999,
                lng: 24.9394641,
              },
            },
            memo: '호텔에서 할일',
            todos: [
              {
                id: 1,
                todo: '호텔 체크아웃',
                completed: false,
              },
              {
                id: 2,
                todo: '짐 보내기',
                completed: false,
              },
            ],
            article: {},
          },
        ],
      },
    ],
    newScheduleCellDate: '2022-09-03T15:00:00.000Z',
  },
];

const processMainTripSchedules = (searchCategory, searchValue) => {
  const filteredtripSchedules = tripSchedules.map(
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

  if (searchCategory) {
    return filteredtripSchedules.filter(tripSchedule => tripSchedule[searchCategory].includes(searchValue));
  }

  return filteredtripSchedules;
};

const findTripSchedule = id => tripSchedules.find(tripSchedule => tripSchedule.tripScheduleId === id);

const generateTripScheduleId = () =>
  Math.max(...tripSchedules.map(tripSchedule => +tripSchedule.tripScheduleId), 0) + 1;

const setTripSchdule = newTripSchedule => {
  console.log(newTripSchedule);
  const responseTripSchedule = { ...newTripSchedule, tripScheduleId: generateTripScheduleId().toString() };
  tripSchedules = [...tripSchedules, responseTripSchedule];
  return responseTripSchedule;
};

module.exports = { processMainTripSchedules, findTripSchedule, setTripSchdule };
