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
    tripScheduleId: 12,
    authorId: 15,
    author: 'dee',
    title: '이탈리아 5박 6일 여행기',
    summary: '',
    tripDays: 6,
    startDate: '2022-09-05T00:00:00.000Z',
    endDate: '2022-09-10T00:00:00.000Z',
    createdDate: '2022-08-31T00:52:39.201Z',
    numberOfPeople: '1',
    coverImg: '/assets/images/tripSchedules/italy.jpg',
    content: '붉은 지붕으로 가득한 피렌체 여행기.\n미켈란젤로 광장에서 노을과 버스킹 무대는 필수!',
    isLiked: false,
    likeCount: 0,
    commentCount: 0,
    itinerary: [
      {
        id: 1,
        country: '이탈리아',
        date: '2022-09-04T15:00:00.000Z',
        cells: [
          {
            id: 1,
            type: 'transportation',
            startTime: '05:00',
            endTime: '17:00',
            location: {
              adr_address:
                '<span class="country-name">대한민국</span> <span class="region">인천광역시</span> <span class="locality">중구</span> <span class="street-address">공항로 272</span>',
              formatted_address: '대한민국 인천광역시 중구 공항로 272',
              geometry: {
                location: {
                  lat: 37.4601908,
                  lng: 126.4406957,
                },
                viewport: {
                  south: 37.4398949,
                  west: 126.4300404,
                  north: 37.4669561,
                  east: 126.4726616,
                },
              },
              name: '대한민국 인천광역시 중구 공항로 인천국제공항 (ICN)',
              html_attributions: [],
              latLng: {
                lat: 37.4601908,
                lng: 126.4406957,
              },
            },
            memo: '공항에 일찍 도착해서 준비하기',
            todos: [
              {
                id: 1,
                todo: '환전하기',
                completed: false,
              },
              {
                id: 2,
                todo: '면세점 들리기',
                completed: false,
              },
            ],
            article: {},
          },
          {
            id: 2,
            type: 'sightseeing',
            startTime: '18:00',
            endTime: '19:00',
            location: {
              adr_address:
                '<span class="street-address">Piazzale Michelangelo</span>, <span class="postal-code">50125</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazzale Michelangelo, 50125 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7629314,
                  lng: 11.2650561,
                },
                viewport: {
                  south: 43.7614267197085,
                  west: 11.2632222197085,
                  north: 43.7641246802915,
                  east: 11.2659201802915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 미켈란젤로 광장 미켈란젤로 광장',
              html_attributions: [],
              latLng: {
                lat: 43.7629314,
                lng: 11.2650561,
              },
            },
            memo: '노을 보면서 피렌체 야경 구경하기',
            todos: [],
            article: {},
          },
          {
            id: 3,
            type: 'etc',
            startTime: '19:00',
            endTime: '20:00',
            location: {
              adr_address:
                '<span class="street-address">Piazzale Michelangelo, 1</span>, <span class="postal-code">50125</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazzale Michelangelo, 1, 50125 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7620429,
                  lng: 11.2647275,
                },
                viewport: {
                  south: 43.7607186197085,
                  west: 11.2635389197085,
                  north: 43.7634165802915,
                  east: 11.2662368802915,
                },
              },
              name: 'La Loggia del Piazzale Michelangelo, Piazzale Michelangelo, 플로렌스 피렌체 이탈리아',
              html_attributions: [],
              latLng: {
                lat: 43.7620429,
                lng: 11.2647275,
              },
            },
            memo: '이탈리아 맛집 1 : 피자',
            todos: [],
            article: {},
          },
          {
            id: 4,
            type: 'accomodation',
            startTime: '20:00',
            endTime: '24:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '피렌체 성당 앞 숙소 ',
            todos: [
              {
                id: 1,
                todo: '내일 갈 장소 길 미리 알아두기',
                completed: false,
              },
              {
                id: 2,
                todo: '필요한 물품들 챙겨놓기',
                completed: false,
              },
            ],
            article: {},
          },
        ],
      },
      {
        id: 2,
        country: '이탈리아',
        date: '2022-09-05T15:00:00.000Z',
        cells: [
          {
            id: 5,
            type: 'accomodation',
            startTime: '00:00',
            endTime: '06:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '일찍 일어나서 아침먹기',
            todos: [],
            article: {},
          },
          {
            id: 6,
            type: 'etc',
            startTime: '12:00',
            endTime: '14:00',
            location: {
              adr_address:
                '<span class="street-address">Borgo Pinti, 10</span>/18R, <span class="postal-code">50121</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Borgo Pinti, 10/18R, 50121 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.772102,
                  lng: 11.26222,
                },
                viewport: {
                  south: 43.77075461970851,
                  west: 11.2608106197085,
                  north: 43.7734525802915,
                  east: 11.2635085802915,
                },
              },
              name: 'La Giostra, Borgo Pinti, 플로렌스 피렌체 이탈리아',
              html_attributions: [],
              latLng: {
                lat: 43.772102,
                lng: 11.26222,
              },
            },
            memo: '티본 스테이크 먹기!!!',
            todos: [],
            article: {},
          },
          {
            id: 7,
            type: 'sightseeing',
            startTime: '08:00',
            endTime: '12:00',
            location: {
              adr_address:
                '<span class="street-address">Piazza del Duomo</span>, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazza del Duomo, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.77314499999999,
                  lng: 11.2559602,
                },
                viewport: {
                  south: 43.77174374999999,
                  west: 11.25256315,
                  north: 43.77488434999999,
                  east: 11.25972295,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazza del Duomo, 피렌체 대성당',
              html_attributions: [],
              latLng: {
                lat: 43.77314499999999,
                lng: 11.2559602,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 8,
            type: 'etc',
            startTime: '07:00',
            endTime: '08:00',
            location: {
              adr_address:
                '<span class="street-address">Piazza della Repubblica, 4</span>, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazza della Repubblica, 4, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7713405,
                  lng: 11.2546231,
                },
                viewport: {
                  south: 43.77000881970851,
                  west: 11.2531721197085,
                  north: 43.77270678029151,
                  east: 11.2558700802915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazza della Repubblica, 두오모가 보이는 테라스 카페',
              html_attributions: [],
              latLng: {
                lat: 43.7713405,
                lng: 11.2546231,
              },
            },
            memo: '두오모 성당보면서 브런치 먹기',
            todos: [
              {
                id: 1,
                todo: '티라미수 디저트로 꼭 먹기',
                completed: false,
              },
            ],
            article: {},
          },
          {
            id: 9,
            type: 'sightseeing',
            startTime: '15:00',
            endTime: '19:00',
            location: {
              adr_address:
                '<span class="street-address">Piazzale degli Uffizi, 6</span>, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazzale degli Uffizi, 6, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7677856,
                  lng: 11.2553108,
                },
                viewport: {
                  south: 43.76706566970849,
                  west: 11.2542824697085,
                  north: 43.76976363029149,
                  east: 11.2569804302915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazzale degli Uffizi, 우피치 미술관',
              html_attributions: [],
              latLng: {
                lat: 43.7677856,
                lng: 11.2553108,
              },
            },
            memo: '유명한 미술관 천천히 돌아다니면서 구경하기',
            todos: [
              {
                id: 1,
                todo: '꼭 보고 싶은 미술품 적어놓기',
                completed: false,
              },
              {
                id: 2,
                todo: '오디오 빌리기',
                completed: false,
              },
              {
                id: 3,
                todo: '예약 티켓 발권하기',
                completed: false,
              },
            ],
            article: {},
          },
          {
            id: 10,
            type: 'etc',
            startTime: '19:00',
            endTime: '21:00',
            location: {
              adr_address:
                '<span class="street-address">Via dei Tavolini, 12</span>/R, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Via dei Tavolini, 12/R, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7708915,
                  lng: 11.2557616,
                },
                viewport: {
                  south: 43.76982006970849,
                  west: 11.2544786197085,
                  north: 43.77251803029149,
                  east: 11.2571765802915,
                },
              },
              name: 'Ristorante Paoli, Via dei Tavolini, 플로렌스 피렌체 이탈리아',
              html_attributions: [],
              latLng: {
                lat: 43.7708915,
                lng: 11.2557616,
              },
            },
            memo: '와인 한잔',
            todos: [],
            article: {},
          },
          {
            id: 11,
            type: 'accomodation',
            startTime: '21:00',
            endTime: '24:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '푹 쉬기',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 3,
        country: '이탈리아',
        date: '2022-09-06T15:00:00.000Z',
        cells: [
          {
            id: 12,
            type: 'accomodation',
            startTime: '00:00',
            endTime: '08:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 13,
            type: 'etc',
            startTime: '08:00',
            endTime: '10:00',
            location: {
              adr_address:
                '<span class="street-address">Via Roma, 9</span>/1, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Via Roma, 9/1, 50123 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7719614,
                  lng: 11.2543342,
                },
                viewport: {
                  south: 43.7706190197085,
                  west: 11.2530328197085,
                  north: 43.7733169802915,
                  east: 11.2557307802915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Via Roma, 카페질리',
              html_attributions: [],
              latLng: {
                lat: 43.7719614,
                lng: 11.2543342,
              },
            },
            memo: '브런치',
            todos: [],
            article: {},
          },
          {
            id: 14,
            type: 'sightseeing',
            startTime: '10:00',
            endTime: '14:00',
            location: {
              adr_address:
                '<span class="street-address">Via Ricasoli, 58</span>/60, <span class="postal-code">50129</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Via Ricasoli, 58/60, 50129 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.77681450000001,
                  lng: 11.2586424,
                },
                viewport: {
                  south: 43.7754930197085,
                  west: 11.2572938197085,
                  north: 43.7781909802915,
                  east: 11.2599917802915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Via Ricasoli, 아카데미아 미술관',
              html_attributions: [],
              latLng: {
                lat: 43.77681450000001,
                lng: 11.2586424,
              },
            },
            memo: '다비드상 구경',
            todos: [],
            article: {},
          },
          {
            id: 15,
            type: 'etc',
            startTime: '14:00',
            endTime: '15:00',
            location: {
              adr_address:
                '<span class="street-address">Borgo Pinti, 10</span>/18R, <span class="postal-code">50121</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Borgo Pinti, 10/18R, 50121 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.772102,
                  lng: 11.26222,
                },
                viewport: {
                  south: 43.77075461970851,
                  west: 11.2608106197085,
                  north: 43.7734525802915,
                  east: 11.2635085802915,
                },
              },
              name: 'La Giostra, Borgo Pinti, 플로렌스 피렌체 이탈리아',
              html_attributions: [],
              latLng: {
                lat: 43.772102,
                lng: 11.26222,
              },
            },
            memo: '티본 스테이크 2차 ',
            todos: [],
            article: {},
          },
          {
            id: 16,
            type: 'sightseeing',
            startTime: '16:00',
            endTime: '18:00',
            location: {
              adr_address:
                '<span class="street-address">Ponte Vecchio</span>, <span class="postal-code">50125</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Ponte Vecchio, 50125 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.76792500000001,
                  lng: 11.2531435,
                },
                viewport: {
                  south: 43.7666200697085,
                  west: 11.2517530697085,
                  north: 43.7693180302915,
                  east: 11.2544510302915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Ponte Vecchio, 베키오 다리',
              html_attributions: [],
              latLng: {
                lat: 43.76792500000001,
                lng: 11.2531435,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 17,
            type: 'sightseeing',
            startTime: '18:00',
            endTime: '20:00',
            location: {
              adr_address:
                '<span class="street-address">Piazzale Michelangelo</span>, <span class="postal-code">50125</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazzale Michelangelo, 50125 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7629314,
                  lng: 11.2650561,
                },
                viewport: {
                  south: 43.7614267197085,
                  west: 11.2632222197085,
                  north: 43.7641246802915,
                  east: 11.2659201802915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 미켈란젤로 광장 미켈란젤로 광장',
              html_attributions: [],
              latLng: {
                lat: 43.7629314,
                lng: 11.2650561,
              },
            },
            memo: '오늘도 노을과 버스킹 구경',
            todos: [],
            article: {},
          },
          {
            id: 18,
            type: 'accomodation',
            startTime: '21:00',
            endTime: '24:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 4,
        country: '이탈리아',
        date: '2022-09-07T15:00:00.000Z',
        cells: [
          {
            id: 19,
            type: 'accomodation',
            startTime: '00:00',
            endTime: '08:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 20,
            type: 'sightseeing',
            startTime: '09:00',
            endTime: '14:00',
            location: {
              adr_address:
                'Piazza del Mercato Centrale, <span class="street-address">Via dell&#39;Ariento</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Piazza del Mercato Centrale, Via dell'Ariento, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7765171,
                  lng: 11.2530512,
                },
                viewport: {
                  south: 43.77533931970851,
                  west: 11.2518397697085,
                  north: 43.77803728029151,
                  east: 11.2545377302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 피렌체 중앙시장",
              html_attributions: [],
              latLng: {
                lat: 43.7765171,
                lng: 11.2530512,
              },
            },
            memo: '과일사기',
            todos: [],
            article: {},
          },
          {
            id: 21,
            type: 'sightseeing',
            startTime: '15:00',
            endTime: '18:00',
            location: {
              adr_address:
                '<span class="street-address">Piazza dei Cavalleggeri, 1</span>, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazza dei Cavalleggeri, 1, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.76708129999999,
                  lng: 11.2623479,
                },
                viewport: {
                  south: 43.76561441970849,
                  west: 11.2609038697085,
                  north: 43.76831238029149,
                  east: 11.2636018302915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazza dei Cavalleggeri, 피렌체 국립도서관',
              html_attributions: [],
              latLng: {
                lat: 43.76708129999999,
                lng: 11.2623479,
              },
            },
            memo: '책 빌리기',
            todos: [],
            article: {},
          },
          {
            id: 22,
            type: 'etc',
            startTime: '18:00',
            endTime: '20:00',
            location: {
              adr_address:
                '<span class="street-address">Borgo Pinti, 10</span>/18R, <span class="postal-code">50121</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Borgo Pinti, 10/18R, 50121 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.772102,
                  lng: 11.26222,
                },
                viewport: {
                  south: 43.77075461970851,
                  west: 11.2608106197085,
                  north: 43.7734525802915,
                  east: 11.2635085802915,
                },
              },
              name: 'La Giostra, Borgo Pinti, 플로렌스 피렌체 이탈리아',
              html_attributions: [],
              latLng: {
                lat: 43.772102,
                lng: 11.26222,
              },
            },
            memo: '티본 스테이크 3차',
            todos: [],
            article: {},
          },
          {
            id: 23,
            type: 'accomodation',
            startTime: '20:00',
            endTime: '24:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 5,
        country: '이탈리아',
        date: '2022-09-08T15:00:00.000Z',
        cells: [
          {
            id: 26,
            type: 'etc',
            startTime: '11:00',
            endTime: '14:00',
            location: {
              adr_address:
                '<span class="street-address">Piazza della Repubblica, 4</span>, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazza della Repubblica, 4, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.7713405,
                  lng: 11.2546231,
                },
                viewport: {
                  south: 43.77000881970851,
                  west: 11.2531721197085,
                  north: 43.77270678029151,
                  east: 11.2558700802915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazza della Repubblica, 두오모가 보이는 테라스 카페',
              html_attributions: [],
              latLng: {
                lat: 43.7713405,
                lng: 11.2546231,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 27,
            type: 'accomodation',
            startTime: '19:00',
            endTime: '24:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 28,
            type: 'accomodation',
            startTime: '00:00',
            endTime: '06:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 29,
            type: 'sightseeing',
            startTime: '07:00',
            endTime: '11:00',
            location: {
              adr_address:
                '<span class="street-address">Piazza del Duomo</span>, <span class="postal-code">50122</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'Piazza del Duomo, 50122 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.77314499999999,
                  lng: 11.2559602,
                },
                viewport: {
                  south: 43.77174374999999,
                  west: 11.25256315,
                  north: 43.77488434999999,
                  east: 11.25972295,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazza del Duomo, 피렌체 대성당',
              html_attributions: [],
              latLng: {
                lat: 43.77314499999999,
                lng: 11.2559602,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
          {
            id: 30,
            type: 'sightseeing',
            startTime: '15:00',
            endTime: '19:00',
            location: {
              adr_address:
                '<span class="street-address">P.za di Santa Maria Novella, 18</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: 'P.za di Santa Maria Novella, 18, 50123 Firenze FI, 이탈리아',
              geometry: {
                location: {
                  lat: 43.77463460000001,
                  lng: 11.2493859,
                },
                viewport: {
                  south: 43.77332946970849,
                  west: 11.24785176970849,
                  north: 43.77602743029149,
                  east: 11.2505497302915,
                },
              },
              name: '이탈리아 피렌체 플로렌스 Piazza di Santa Maria Novella, 산타 마리아 노벨라 성당',
              html_attributions: [],
              latLng: {
                lat: 43.77463460000001,
                lng: 11.2493859,
              },
            },
            memo: '',
            todos: [],
            article: {},
          },
        ],
      },
      {
        id: 6,
        country: '이탈리아',
        date: '2022-09-09T15:00:00.000Z',
        cells: [
          {
            id: 24,
            type: 'transportation',
            startTime: '05:00',
            endTime: '18:00',
            location: {
              adr_address:
                '<span class="postal-code">21010</span> <span class="locality">Ferno</span>, <span class="region">VA</span>, <span class="country-name">이탈리아</span>',
              formatted_address: '21010 Ferno, VA, 이탈리아',
              geometry: {
                location: {
                  lat: 45.6300625,
                  lng: 8.7255307,
                },
                viewport: {
                  south: 45.62253009999999,
                  west: 8.699633200000001,
                  north: 45.6325733,
                  east: 8.734163200000001,
                },
              },
              name: '이탈리아 바레세 Ferno, 밀라노 말펜사 국제공항',
              html_attributions: [],
              latLng: {
                lat: 45.6300625,
                lng: 8.7255307,
              },
            },
            memo: '한국으로 이동',
            todos: [],
            article: {},
          },
          {
            id: 25,
            type: 'accomodation',
            startTime: '00:00',
            endTime: '04:00',
            location: {
              adr_address:
                '<span class="street-address">Via dell&#39;Ariento, 2</span>, <span class="postal-code">50123</span> <span class="locality">Firenze</span> <span class="region">FI</span>, <span class="country-name">이탈리아</span>',
              formatted_address: "Via dell'Ariento, 2, 50123 Firenze FI, 이탈리아",
              geometry: {
                location: {
                  lat: 43.7755584,
                  lng: 11.2536356,
                },
                viewport: {
                  south: 43.7742002197085,
                  west: 11.2522878697085,
                  north: 43.7768981802915,
                  east: 11.2549858302915,
                },
              },
              name: "이탈리아 피렌체 플로렌스 Via dell'Ariento, 에메랄드 팰리스",
              html_attributions: [],
              latLng: {
                lat: 43.7755584,
                lng: 11.2536356,
              },
            },
            memo: '공항 갈 준비',
            todos: [],
            article: {},
          },
        ],
      },
    ],
    newScheduleCellDate: '2022-09-08T15:00:00.000Z',
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
