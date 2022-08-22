import render from '../dom/render.js';

const store = {
  _store: {
    coverImg:
      'https://images.unsplash.com/photo-1564596823821-79b97151055e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: '다낭 갔다왔습니다낭~',
    summary: '베트남ㆍ3일',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero aliquid incidunt. Voluptatemollitia consectetur sint harum eligendi in at blanditiis distinctio temporibus debitis, numquam facilisofficiis doloribus non nisi?',
    startDate: '2022-08-15',
    endDate: '2022-08-16',
    people: 2,
    selectedTab: 'chart',
    user: {
      profileImg: '/assets/images/profile-mock.png',
      nickname: '오똑똑이',
    },
    isLiked: false,
    likeCount: 69,
    commentCount: 12,
    dayItem: [
      {
        date: '2022.08.15(Mon)',
        country: '베트남',
        articles: [
          {
            place: '다낭 국제 공항',
            time: '오후 08:00',
            picture:
              'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            content:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati autem officia mollitia vel',
          },
          {
            place: '다낭 야시장',
            time: '오후 09:00',
            picture:
              'https://images.unsplash.com/photo-1552912470-ee2e96439539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
            content: '맛있는거 많아요우',
          },
        ],
      },
      {
        date: '2022.08.16(Tue)',
        country: '베트남',
        articles: [
          {
            place: '다낭 야시장',
            time: '오후 09:00',
            picture:
              'https://images.unsplash.com/photo-1552912470-ee2e96439539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
            content: '맛있어서 또 들렸어~',
          },
        ],
      },
    ],
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
