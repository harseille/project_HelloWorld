/* eslint-disable no-continue */
import eventBuffer from '../dom/eventBuffer.js';
import render from '../dom/render.js';

class Component {
  constructor(props) {
    this.props = props;
    this.keepEvent();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    render();
  }

  render() {
    throw new Error('render 메서드는 구현해야합니다.');
  }

  keepEvent() {
    const events = this.addEventListener?.();
    if (!events) return;

    // selector가 window일 때 window에 쌓인다(걸러주는 것 업이. 그래서 다른 클래스에서 event 날릴 때 component 추가해줘야함)
    for (const event of events) {
      if (event.selector === 'window' || event.selector === null) {
        eventBuffer.events = event;
        continue;
      }

      const same = eventBuffer.events.find(({ type, selector }) => type === event.type && selector === event.selector);
      // console.log(same);
      if (same === undefined) {
        const { selector, handler } = event;

        event.handler = e => {
          if (e.target.matches(selector) || e.target.closest(selector)) handler(e);
        };
        eventBuffer.events = event;
      }
    }
  }
}

export default Component;
