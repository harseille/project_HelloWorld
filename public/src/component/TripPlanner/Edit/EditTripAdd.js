import Component from '../../../core/Component.js';

class EditPlanAdd extends Component {
  render() {
    return `
    <!-- private & public button -->
    <div class="itinerary-btns">
      <button class="itinerary-btns--private">나만의 일정</button>
      <button class="itinerary-btns--public">다른 사람들에게도 공유하기</button>
    </div>
    `;
  }
}

export default EditPlanAdd;
