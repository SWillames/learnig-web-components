class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

    build() {
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");

      const card_left = document.createElement("div");
      card_left.setAttribute("class", "card_left");

      const author = document.createElement("span");
      author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

      const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");

      const newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("content");

      card_left.appendChild(author);
      card_left.appendChild(linkTitle);
      card_left.appendChild(newsContent);

      const card_right = document.createElement("div");
      card_right.setAttribute("class", "card_right");

      const newsImage = document.createElement("img");
      newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
      card_right.appendChild(newsImage);

      componentRoot.appendChild(card_left);
      componentRoot.appendChild(card_right);

      return componentRoot;
    }
  
}

customElements.define('card-news', CardNews)