class ProductCard extends HTMLElement {
  constructor() {
      super();
      
      this.shadow = this.attachShadow({ mode: 'open' });

      // Creating the card container
      this.card = document.createElement('div');
      this.card.classList.add('card');

      // Creating the image element
      this.img = document.createElement('img');

      // Creating the title
      this.productTitle = document.createElement('h3');

      // Creating the description
      this.description = document.createElement('p');

      // Append elements to the card container
      this.card.appendChild(this.img);
      this.card.appendChild(this.productTitle);
      this.card.appendChild(this.description);

      // Attach styles to shadow DOM
      const style = document.createElement('style');
      style.textContent = `
          .card {
              border: 1px solid #ddd;
              padding: 20px;
              width: 30%;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .card img {
              width: 100%;
              height: auto;
              border-radius: 5px;
          }
          .card h3 {
              margin-top: 10px;
          }
      `;
      
      this.shadow.appendChild(style);
      this.shadow.appendChild(this.card);
  }

  // Specify observed attributes
  static get observedAttributes() {
      return ['image', 'title', 'description'];
  }

  // Handle attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'image') {
          this.img.src = newValue;
      } else if (name === 'title') {
          this.img.alt = newValue; // Update alt text for the image
          this.productTitle.textContent = newValue; // Update title text directly
      } else if (name === 'description') {
          this.description.textContent = newValue;
      }
  }
}

// Define the custom element
customElements.define('product-card', ProductCard);
