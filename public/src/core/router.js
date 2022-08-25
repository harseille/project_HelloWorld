import { Intro, Main, Login, Signup, Itinerary, EditTripPlanner, ViewTripPlanner, Mypage } from '../component/index.js';

const router = [
  {
    '/intro': Intro,
  },
  {
    '/main': Main,
  },
  {
    '/login': Login,
  },
  {
    '/signup': Signup,
  },
  {
    '/itinerary': Itinerary,
  },
  {
    '/trip-planner-edit': EditTripPlanner,
  },
  {
    '/trip-planner-view': ViewTripPlanner,
  },
  {
    '/mypage': Mypage,
  },
];

// 현재 path에 따라 어떤 domString 할지 보여주도록 하는 함수
const routes = () => {
  const location = window.location.pathname;

  const [same] = Object.values(router.find(route => route[location]));

  if (same) {
    const Component = same;
    return new Component().render();
  }
};

export { routes };
