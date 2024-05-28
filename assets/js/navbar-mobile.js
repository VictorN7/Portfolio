
class NavbarMobile{

    constructor(menuMobile, listaNav, linksNav){

        this.menuMobile = document.querySelector(menuMobile);
        this.listaNav = document.querySelector(listaNav);
        this.linksNav = document.querySelectorAll(linksNav);

        this.classeAtiva = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animarLinks(){
        this.linksNav.forEach((link, index) => {
            link.style.animation?(link.style.animation = ""): (link.style.animation = `navOpacidade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.listaNav.classList.toggle(this.classeAtiva);
        this.menuMobile.classList.toggle(this.classeAtiva);
        this.animarLinks();
    }

    addClickEvent(){
    this.menuMobile.addEventListener("click", this.handleClick);
    }
    inicia(){
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }

}

const navbarMobile = new NavbarMobile(".menu-mobile",".ul-container",".ul-container li");

navbarMobile.inicia();
