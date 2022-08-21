import Component from '../../../core/Component.js';

class ViewNavDay extends Component {
  render() {
    return `
    <div class="nav-day">
      <ul class="nav-day__list">
        <li class="nav-day__item active"><a href="">Top</a></li>
        <li class="nav-day__item"><a href="">Day 1</a></li>
        <li class="nav-day__item"><a href="">Day 2</a></li>
        <li class="nav-day__item"><a href="">Day 3</a></li>
        <li class="nav-day__item"><a href="">댓글</a></li>
      </ul>
    </div>
    `;
  }
}

export default ViewNavDay;
