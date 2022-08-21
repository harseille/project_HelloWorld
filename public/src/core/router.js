import { Intro, Main, Login, Signup, Itinerary } from '../component/index.js';

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
];

// 현재 path에 따라 어떤 domString 할지 보여주도록 하는 함수
const routes = () => {
  const location = window.location.pathname; //  /login

  const same = Object.values(router.find(route => route[location]));
  console.log(same);
  if (same) {
    const Component = same[0];
    return new Component().render();
  }
};

export { routes };
