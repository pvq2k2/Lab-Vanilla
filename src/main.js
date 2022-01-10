import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";

const router = new Navigo("/", { linksSelector: "a" });
const render = (content) => {
    document.getElementById("app").innerHTML = content.print();
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