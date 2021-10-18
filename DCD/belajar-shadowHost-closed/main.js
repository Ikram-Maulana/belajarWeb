// Shadow Host
const divElement = document.createElement("div");

// element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";
// Penambahan style untuk mode 'closed'
headingElement.innerHTML += `
  <style>
  h1 {
    color: green;
  }
  </style>
`;

// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({
  mode: "closed"
});

// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);