/* eslint-disable no-undef */
class jumbotronMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron"
      style="background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('images/heros/hero-image_4.jpg') center center/cover no-repeat; background-attachment: fixed;">
      <h1 tabindex="0">Choose your taste</h1>
      <p tabindex="0">Let's explore best restaurant around you.</p>
    </div>
    `;
  }
}

customElements.define('jumbotron-main', jumbotronMain);
