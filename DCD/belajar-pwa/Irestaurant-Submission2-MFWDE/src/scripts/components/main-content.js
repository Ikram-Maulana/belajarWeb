/* eslint-disable no-undef */
class mainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <main id="maincontent" tabindex="0" aria-label="main content.">
    </main>
    `;
  }
}

customElements.define('main-content', mainContent);
