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
    console.log(this.state);
    render();
  }

  render() {
    throw new Error('render 메서드는 구현해야합니다.');
  }

  keepEvent() {
    const events = this.addEventListener?.();
    if (!events) return;
    for (const event of events) {
      if (event.selector === 'window' || event.selector === null) {
        const same = eventBuffer.events.find(
          ({ type, selector, component }) =>
            type === event.type && selector === event.selector && component === event.component
        );

        if (same === undefined) {
          eventBuffer.events = event;
        }
        continue;
      }

      const same = eventBuffer.events.find(({ type, selector }) => type === event.type && selector === event.selector);

      if (same === undefined) {
        const { selector, handler } = event;

        event.handler = e => {
          if (e.target.matches(selector) || e.target.closest(selector)) handler(e);
        };
        eventBuffer.events = event;
      }
    }
    // console.log(events);
  }
}

export default Component;
