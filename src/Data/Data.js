import searchStyle from '../Components/Navigation/Navbar/Search/Search.module.css'
import burgerStyle from '../Components/Navigation/Navbar/Burger/Burger.module.css'
import mechanismStyle from '../Components/Section1/Mechanism/Mechanism.module.css'

export const txt = 'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного '

export const section1Data = [
    {text: 'Производство оборудывания', img: 'url("/Files/Rectangle 18.png")'},
    {text: 'Металическая мебель', img: 'url("/Files/Rectangle 20.png")'},
    {text: 'Металоконструкции', img: 'url("/Files/Rectangle 22.png")'},
    {text: 'Металообработка', img: 'url("/Files/Rectangle 19.png")'},
    {text: 'Раскрой метала', img: 'url("/Files/Rectangle 21.png")'},
    {text: 'Конструкторское бюро', img: 'url("/Files/Rectangle 17.png")',},
    {text: 'Аренда техники', img: 'url("/Files/Rectangle 23.png")',width:585},
    {text: 'Ремон техники', img: 'url("/Files/Rectangle 24.png")',width:585},
]

export const mainImage = 'url("/Files/Rectangle.png")'

export function hideSearch(){
    const search = document.getElementById('search')
    search.classList.toggle(searchStyle.hiden)
}

export function showBurger(){
    const burger = document.getElementById('burger')
    const menu = document.getElementById('menu')
    burger.classList.toggle(burgerStyle.hiden)
    menu.classList.toggle(burgerStyle.crossed)
}
export function rotate(){
    console.log('scrolled')
    /*const mechanism = document.querySelectorAll('#mechanism')
    console.log(mechanism)*/
}
