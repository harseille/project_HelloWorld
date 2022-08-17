let router = {};

// 현재 path에 따라 어떤 domString 할지 보여주도록 하는 함수
const routes = () => {
  const location = window.location.pathname; //  /login

  const same = router[location];

  if (same) {
    const Component = same;
    return new Component().render();
  }
};

const route = (path, component) => {
  router = { ...router, ...{ [path]: component } };
};

export { routes, route };
