let tripSchedules = [
  {
    tripScheduleId: 1,
    authorId: 2,
    author: '민홍손',
    authorProfilePic: '/assets/images/users/1/thumbnail.png',
    title: '런던 시내 한 구석에서 손흥민을 만났습니다',
    summary: '런던ㆍ4일', // TODO: 어떻게 보여줄지, 관리 포인트를 줄이기위해 없애는게 맞아보임
    startDate: '2022-09-03T00:00:00.000Z',
    endDate: '2022-09-04T00:00:00.000Z',
    createdDate: '2022-08-30T01:17:00.067Z',
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
  },
  {
    tripScheduleId: 2,
    authorId: 5,
    author: '오똑똑',
    authorProfilePic: '/assets/images/profile6.png',
    title: '제주 핵심 명소 78곳 1분 요약',
    summary: '한국 - 5일',
    startDate: '2022-08-31',
    endDate: '2022-09-01',
    createdDate: '2022-08-29T06:45:40.961Z',
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
  },
  {
    tripScheduleId: 3,
    authorId: 6,
    author: '백종원',
    authorProfilePic:
      'https://yt3.ggpht.com/ytc/AMLnZu98MEQvuszPd3pPRdkn47wibmrW81BeDYy3lj15pQ=s900-c-k-c0x00ffffff-no-rj',
    title: '돼지 갈비 찜 맛집을 찾아',
    summary: '한국 - 1일',
    startDate: '2022-09-03T00:00:00.000Z',
    endDate: '2022-09-04T00:00:00.000Z',
    createdDate: '2022-08-30T01:17:00.067Z',
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
  },
  {
    tripScheduleId: 4,
    authorId: 7,
    author: '크라이',
    authorProfilePic: '/assets/images/profile3.png',
    title: '룩 룩 룩셈부르크 ',
    summary: '룩셈부르크 - 3일',
    startDate: '2022-09-03T00:00:00.000Z',
    endDate: '2022-09-04T00:00:00.000Z',
    createdDate: '2022-08-30T01:17:00.067Z',
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
  },
  {
    tripScheduleId: 5,
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
    tripScheduleId: 6,
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
    coverImg:
      'https://www.visitfinland.com/.imaging/mte/visit-finland-theme/xlUpW/dam/Helsinki/Lo-yly_Helsinki_credit-Ulla-Ma-kela-.jpg/jcr:content/L%C3%B6yly_Helsinki_credit%20Ulla%20M%C3%A4kel%C3%A4.jpg',
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
  {
    tripScheduleId: 9,
    authorId: 13,
    author: '다다',
    authorProfilePic: '/assets/images/users/13/profile1.jpeg',
    title: '뉴욕에서 \b3일간 캐리 브래드쇼로 살기',
    summary: '',
    tripDays: 3,
    startDate: '2023-01-01T00:00:00.000Z',
    endDate: '2023-01-03T15:00:00.000Z',
    createdDate: '2022-08-30T12:23:27.623Z',
    numberOfPeople: '1',
    coverImg: '/assets/images/tripSchedules/13/a.jpeg',
    content: '글 쓰고 그림그리고 커피마시고 맛집가고 재밌게 놀아보렵니다',
    isLiked: false,
    likeCount: 0,
    commentCount: 0,
    itinerary: [
      {
        id: 1,
        country: '',
        date: '2022-12-31T15:00:00.000Z',
        cells: [
          {
            id: 1,
            type: 'accomodation',
            startTime: '14:00',
            endTime: '15:00',
            location: {
              adr_address:
                '<span class="street-address">400 5th Ave</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10018</span>, <span class="country-name">USA</span>',
              formatted_address: '400 5th Ave, New York, NY 10018, USA',
              geometry: {
                location: {
                  lat: 40.75014379999999,
                  lng: -73.9835325,
                },
                viewport: {
                  south: 40.74866211970849,
                  west: -73.98501938029149,
                  north: 40.75136008029149,
                  east: -73.98232141970848,
                },
              },
              name: 'The Langham, New York, Fifth Avenue, 5th Avenue, New York, NY, USA',
              html_attributions: [],
              latLng: {
                lat: 40.75014379999999,
                lng: -73.9835325,
              },
            },
            memo: '호텔 체크인',
            todos: [],
            article: {},
          },
          {
            id: 2,
            type: 'sightseeing',
            startTime: '15:00',
            endTime: '18:00',
            location: {
              adr_address:
                '<span class="locality">Manhattan</span>, <span class="region">NY</span> <span class="postal-code">10036</span>, <span class="country-name">USA</span>',
              formatted_address: 'Manhattan, NY 10036, USA',
              geometry: {
                location: {
                  lat: 40.7579747,
                  lng: -73.9855426,
                },
                viewport: {
                  south: 40.7550401,
                  west: -73.98768855000003,
                  north: 40.7609901,
                  east: -73.98341435,
                },
              },
              name: 'United States, New York, Manhattan, 타임즈 스퀘어',
              html_attributions: [],
              latLng: {
                lat: 40.7579747,
                lng: -73.9855426,
              },
            },
            memo: '타임스퀘어 가야지',
            todos: [],
            article: {},
          },
          {
            id: 3,
            type: 'etc',
            startTime: '19:00',
            endTime: '22:00',
            location: {
              adr_address:
                '<span class="street-address">166 W 42nd St</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10036</span>, <span class="country-name">USA</span>',
              formatted_address: '166 W 42nd St, New York, NY 10036, USA',
              geometry: {
                location: {
                  lat: 40.7557333,
                  lng: -73.9866136,
                },
                viewport: {
                  south: 40.7544350697085,
                  west: -73.98798893029152,
                  north: 40.7571330302915,
                  east: -73.9852909697085,
                },
              },
              name: 'United States, New York, West 42nd Street, 브로드 웨이 42번가',
              html_attributions: [],
              latLng: {
                lat: 40.7557333,
                lng: -73.9866136,
              },
            },
            memo: '공연 보기',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 2,
        country: '',
        date: '2023-01-01T15:00:00.000Z',
        cells: [
          {
            id: 5,
            type: 'etc',
            startTime: '10:00',
            endTime: '13:00',
            location: {
              adr_address:
                '<span class="street-address">56 Church St</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10007</span>, <span class="country-name">USA</span>',
              formatted_address: '56 Church St, New York, NY 10007, USA',
              geometry: {
                location: {
                  lat: 40.7108515,
                  lng: -74.010708,
                },
                viewport: {
                  south: 40.7094294197085,
                  west: -74.01213093029149,
                  north: 40.71212738029149,
                  east: -74.00943296970848,
                },
              },
              name: 'century 21, Church Street, New York, NY, USA',
              html_attributions: [],
              latLng: {
                lat: 40.7108515,
                lng: -74.010708,
              },
            },
            memo: '쇼핑 하기',
            todos: [],
            article: {},
          },
          {
            id: 8,
            type: 'sightseeing',
            startTime: '20:00',
            endTime: '22:00',
            location: {
              adr_address:
                '<span class="street-address">20 W 34th St.</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10001</span>, <span class="country-name">USA</span>',
              formatted_address: '20 W 34th St., New York, NY 10001, USA',
              geometry: {
                location: {
                  lat: 40.7484405,
                  lng: -73.98566439999999,
                },
                viewport: {
                  south: 40.7470135197085,
                  west: -73.98662333029151,
                  north: 40.7497114802915,
                  east: -73.98392536970849,
                },
              },
              name: 'United States, New York, West 34th Street, 엠파이어 스테이트 빌딩',
              html_attributions: [],
              latLng: {
                lat: 40.7484405,
                lng: -73.98566439999999,
              },
            },
            memo: '엠파이어스테이트 빌딩은 한 번 가줘야지',
            todos: [],
            article: {},
          },
          {
            id: 9,
            type: 'sightseeing',
            startTime: '15:00',
            endTime: '18:00',
            location: {
              adr_address:
                '<span class="locality">New York</span>, <span class="region">NY</span>, <span class="country-name">USA</span>',
              formatted_address: 'New York, NY, USA',
              geometry: {
                location: {
                  lat: 40.7812199,
                  lng: -73.9665138,
                },
                viewport: {
                  south: 40.74051505,
                  west: -73.9986532,
                  north: 40.83420684999999,
                  east: -73.93318399999998,
                },
              },
              name: 'United States, New York, 센트럴 파크',
              html_attributions: [],
              latLng: {
                lat: 40.7812199,
                lng: -73.9665138,
              },
            },
            memo: '센트럴파크에서',
            todos: [
              {
                id: 1,
                todo: '그림 그리고 글 쓰기',
                completed: false,
              },
              {
                id: 2,
                todo: '산책',
                completed: false,
              },
              {
                id: 3,
                todo: '근처에서 밥 먹기',
                completed: false,
              },
            ],
            article: {},
          },
          {
            id: 13,
            type: 'etc',
            startTime: '22:00',
            endTime: '23:00',
            location: {
              adr_address:
                '<span class="street-address">290 5th Ave</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10001</span>, <span class="country-name">USA</span>',
              formatted_address: '290 5th Ave, New York, NY 10001, USA',
              geometry: {
                location: {
                  lat: 40.7463071,
                  lng: -73.9864693,
                },
                viewport: {
                  south: 40.7449057197085,
                  west: -73.9876882302915,
                  north: 40.7476036802915,
                  east: -73.98499026970848,
                },
              },
              name: 'Turntable Chicken Rock, 5th Avenue, New York, NY, USA',
              html_attributions: [],
              latLng: {
                lat: 40.7463071,
                lng: -73.9864693,
              },
            },
            memo: '재즈바 가기',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 3,
        country: '',
        date: '2023-01-02T15:00:00.000Z',
        cells: [
          {
            id: 10,
            type: 'sightseeing',
            startTime: '10:00',
            endTime: '15:00',
            location: {
              adr_address:
                '<span class="street-address">200 Central Park West</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10024</span>, <span class="country-name">USA</span>',
              formatted_address: '200 Central Park West, New York, NY 10024, USA',
              geometry: {
                location: {
                  lat: 40.78132409999999,
                  lng: -73.9739882,
                },
                viewport: {
                  south: 40.7799797,
                  west: -73.97468378029151,
                  north: 40.78294769999999,
                  east: -73.9719858197085,
                },
              },
              name: 'United States, New York, Central Park West, 아메리칸 뮤지엄 오브 네츄럴 히스토리',
              html_attributions: [],
              latLng: {
                lat: 40.78132409999999,
                lng: -73.9739882,
              },
            },
            memo: '자연사 박물관',
            todos: [
              {
                id: 1,
                todo: '근처에서 점심',
                completed: false,
              },
            ],
            article: {},
          },
          {
            id: 11,
            type: 'sightseeing',
            startTime: '15:00',
            endTime: '18:00',
            location: {
              adr_address:
                '<span class="street-address">334 Furman St</span>, <span class="locality">Brooklyn</span>, <span class="region">NY</span> <span class="postal-code">11201</span>, <span class="country-name">USA</span>',
              formatted_address: '334 Furman St, Brooklyn, NY 11201, USA',
              geometry: {
                location: {
                  lat: 40.69914959999999,
                  lng: -73.9976004,
                },
                viewport: {
                  south: 40.6976932697085,
                  west: -73.9985617302915,
                  north: 40.70039123029149,
                  east: -73.99586376970849,
                },
              },
              name: 'United States, New York, Brooklyn, Furman Street, 브루클린 브리지 공원',
              html_attributions: [],
              latLng: {
                lat: 40.69914959999999,
                lng: -73.9976004,
              },
            },
            memo: '브루클린 브릿지',
            todos: [
              {
                id: 1,
                todo: '그림 그리고',
                completed: false,
              },
              {
                id: 2,
                todo: '글 쓰고',
                completed: false,
              },
              {
                id: 3,
                todo: '산책하고',
                completed: false,
              },
              {
                id: 4,
                todo: '근처에서 밥 먹기',
                completed: false,
              },
            ],
            article: {},
          },
          {
            id: 12,
            type: 'etc',
            startTime: '18:00',
            endTime: '20:00',
            location: {
              adr_address:
                '<span class="street-address">99 Park Ave</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10016</span>, <span class="country-name">USA</span>',
              formatted_address: '99 Park Ave, New York, NY 10016, USA',
              geometry: {
                location: {
                  lat: 40.75021580000001,
                  lng: -73.97868989999999,
                },
                viewport: {
                  south: 40.7488773697085,
                  west: -73.9799811802915,
                  north: 40.75157533029149,
                  east: -73.9772832197085,
                },
              },
              name: 'Park Avenue Tavern, Park Avenue, New York, NY, USA',
              html_attributions: [],
              latLng: {
                lat: 40.75021580000001,
                lng: -73.97868989999999,
              },
            },
            memo: '저녁먹기',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 4,
        country: '',
        date: '2023-01-03T15:00:00.000Z',
        cells: [],
      },
    ],
    newScheduleCellDate: '2023-01-01T15:00:00.000Z',
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

const generateTripScheduleId = () => Math.max(...tripSchedules.map(tripSchedule => tripSchedule.tripScheduleId), 0) + 1;

const setTripSchdule = newTripSchedule => {
  console.log(newTripSchedule);
  const responseTripSchedule = { ...newTripSchedule, tripScheduleId: generateTripScheduleId() };
  tripSchedules = [...tripSchedules, responseTripSchedule];
  return responseTripSchedule;
};

module.exports = { processMainTripSchedules, findTripSchedule, setTripSchdule };
