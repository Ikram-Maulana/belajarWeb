/* eslint-disable no-undef */
class fooBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright &copy; 2021 - <strong>I-Restaurant</strong>.</p>
    </footer>
    `;
  }
}

customElements.define('foo-bar', fooBar);
