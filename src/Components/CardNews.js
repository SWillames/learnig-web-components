class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());

    build() {
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");

      const card_left = document.createElement("div");
      card_left.setAttribute("class", "card_left");

      const card_right = document.createElement("div");
      card_right.setAttribute("class", "card_right");

      componentRoot.appendChild(card_left);
      componentRoot.appendChild(card_right);

      return componentRoot;
    }
  }
}

customElements.define('card-news', CardNews)