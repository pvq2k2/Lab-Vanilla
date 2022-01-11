import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPage from "./page/about";
import HomePage from "./page/home";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById('header').innerHTML = Header.print();
    document.getElementById("app").innerHTML = content.print();
    document.getElementById("footer").innerHTML = Footer.print();
}

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    }
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();