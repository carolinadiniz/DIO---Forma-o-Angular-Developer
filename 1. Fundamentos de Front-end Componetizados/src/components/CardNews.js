class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        // root
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");

        // card left
        const card__left = document.createElement('div');
        card__left.setAttribute('class', 'card__left');

        const author = document.createElement('span');
        author.textContent = "By " + (this.getAttribute('author') || "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('title-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        card__left.appendChild(author);
        card__left.appendChild(linkTitle);
        card__left.appendChild(newsContent);


        // card right
        const card__right = document.createElement('div');
        card__right.setAttribute('class', 'card__right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('image-src') || "./assets/foto-default.jpg";
        newsImage.alt = "Foto da Notícia"

        card__right.appendChild(newsImage);


        // appending root
        componentRoot.appendChild(card__left);
        componentRoot.appendChild(card__right);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                box-shadow: 2px 9px 19px -3px rgba(0, 0, 0, 0.53);
                -webkit-box-shadow: 2px 9px 19px -3px rgba(0, 0, 0, 0.53);
                -moz-box-shadow: 2px 9px 19px -3px rgba(0, 0, 0, 0.53);
                justify-content: space-between;
            }
            
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left>span {
                font-weight: 400;
            }
            
            .card__left>a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left>p {
                color: rgb(68, 68, 68);
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);