const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100;500&family=Fruktur&family=Roboto+Mono:wght@100&display=swap');


    nav {
      margin-top:20px;
      height: 150px;
      display: flex;
      text-size:10%;
      align-items: center;
      justify-content: center;
      background-color:  black;
      font-size:20px;
      
    }
    h1{
      color:white;
      padding:8px;
      border:2px;
      font-family:bitter;
      

    }
    

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
      <h1> AYAMS ARQUITECTOS</h1>
        <li><a href="index.html">Home</a></li>
        <li><a href="acerca.html"> Acerca de nos</a></li>
        <li><a href="servicios.html">Nosos servizos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);