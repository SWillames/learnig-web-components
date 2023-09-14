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

    styles() {
      const style = document.createElement("style");
      style.textContent = `
          .card{
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          
          
          .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card_left > p {
            color: rgb(70, 70, 70)
          }
          
          .card_left > span {
            font-weight: 400;
          }
      `;

      return style;
    }
  
}

customElements.define('card-news', CardNews)