import Component from '../../../core/Component.js';

class EditPlanCover extends Component {
  render() {
    return `
    <div class="cover">
      <div class="cover__inner">
        <div class="cover__buttonbox">
        <label for="file">
          <div class="add-cover-btn"><img src="./assets/images/camera.svg" alt="커버사진 추가" /></div>
          <input type="file" name="file" id="file" class="add-cover-input" accept="image/*"/>
        </label>     
        </div>
      </div>
    </div>
    `;
  }

  setCoverImg(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
      console.log(e.target.result);
      document.querySelector('.cover').style.background = `url(${e.target.result}) no-repeat center`;
    };
  }

  addEventListener() {
    return [{ type: 'change', selector: '.add-cover-input', handler: this.setCoverImg }];
  }
}

export default EditPlanCover;
