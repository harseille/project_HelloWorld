import Component from '../core/Component.js';
import render from '../dom/render.js';

class DatePicker extends Component {
  render() {
    return `
      <div class="datepicker hide">
        <div class="datepicker__header">
          <strong>July 2022</strong>
          <button class="datepicker__prev__btn">이전 달</button>
          <button class="datepicker__next__btn">다음 달</button>
        </div>
        <div class="datepicker__contents">
          <ul class="datepicker__week__list">
            <li class="datepicker__week__item">m</li>
            <li class="datepicker__week__item">t</li>
            <li class="datepicker__week__item">w</li>
            <li class="datepicker__week__item">t</li>
            <li class="datepicker__week__item">f</li>
            <li class="datepicker__week__item">s</li>
            <li class="datepicker__week__item">s</li>
          </ul>
          <ul class="datepicker__dates__list">
            <li class="datepicker__dates__item unable">1</li>
            <li class="datepicker__dates__item">2</li>
            <li class="datepicker__dates__item">3</li>
            <li class="datepicker__dates__item">4</li>
            <li class="datepicker__dates__item">5</li>
            <li class="datepicker__dates__item">6</li>
            <li class="datepicker__dates__item">7</li>
            <li class="datepicker__dates__item">8</li>
            <li class="datepicker__dates__item">9</li>
            <li class="datepicker__dates__item">10</li>
            <li class="datepicker__dates__item">11</li>
            <li class="datepicker__dates__item">12</li>
            <li class="datepicker__dates__item">13</li>
            <li class="datepicker__dates__item">14</li>
            <li class="datepicker__dates__item">15</li>
            <li class="datepicker__dates__item">16</li>
            <li class="datepicker__dates__item">17</li>
            <li class="datepicker__dates__item">18</li>
            <li class="datepicker__dates__item">19</li>
            <li class="datepicker__dates__item">20</li>
            <li class="datepicker__dates__item">21</li>
            <li class="datepicker__dates__item">22</li>
            <li class="datepicker__dates__item">23</li>
            <li class="datepicker__dates__item">24</li>
            <li class="datepicker__dates__item">25</li>
            <li class="datepicker__dates__item">26</li>
            <li class="datepicker__dates__item">27</li>
            <li class="datepicker__dates__item">28</li>
            <li class="datepicker__dates__item">29</li>
            <li class="datepicker__dates__item">30</li>
          </ul>
        </div>
      </div>`;
  }
}

export default DatePicker;
