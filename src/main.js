import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import NewsPage from "./page/news";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById('header').innerHTML = Header.print();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
}

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/news": () => {
        render(NewsPage.print());
    }
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();