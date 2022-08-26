const observe = e => {
  console.log('observe=' + e.detail.path);
  console.log('observe=' + window.location.pathname);
};

export default observe;
