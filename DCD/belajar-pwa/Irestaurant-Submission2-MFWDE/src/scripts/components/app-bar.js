/* eslint-disable no-undef */
class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <!-- Brand Logo -->
    <div class="brand-logo" tabindex="0">
      <!-- <h4>I-Restaurant</h4> -->
      <img src="images/brand-logo/brand-logo.png" alt="brandlogo-irestaturant">
    </div>
    <!-- Burger Menu -->
    <button id="menu" class="burger" aria-label="hamburger-menu">☰</button>
    <!-- Navbar -->
    <nav>
      <ul>
        <li><a href="#/home" class="now">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/Ikram-Maulana" target="_blank" rel="noreferrer">About Us</a></li>
      </ul>
    </nav>
    </header>
    `;
  }
}

customElements.define('app-bar', appBar);
