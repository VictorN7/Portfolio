
class NavbarMobile{

    constructor(menuMobile, listaNav, linksNav){

        this.menuMobile = document.querySelector(menuMobile);
        this.listaNav = document.querySelector(listaNav);
        this.linksNav = document.querySelector(linksNav);

        this.classeAtiva = "ativar";
    }

    handleClick(){
        console.log(this);
        this.listaNav.classList.toggle(this.classeAtiva);
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

const navbarMobile = new NavbarMobile(
    ".menu-mobile",
    ".ul-container",
    ".ul-container li",
);

navbarMobile.inicia();
