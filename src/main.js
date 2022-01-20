import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import NewsPage from "./page/news";
import SignInPage from "./page/signIn";
import SignUpPage from "./page/signUp";
import Dashboard from "./page/admin/dashboard";
import NewsAd from "./page/admin/news/index";
import NewsAdd from "./page/admin/news/newsAdd";
import newsEdit from "./page/admin/news/newsEdit";

const router = new Navigo("/", { linksSelector: "a" });
const render = async (content, id) => {
    document.getElementById("app").innerHTML = await content.print(id);
};

router.on({
    "/": () => render(HomePage),
    "/about": () => render(AboutPage),
    "/news": () => render(NewsPage),
    "/signup": () => render(SignUpPage),
    "/signin": () => render(SignInPage),
    "/admin": () => render(Dashboard),
    "/admin/dashboard": () => render(Dashboard),
    "/admin/news": () => render(NewsAd),
    "/admin/news/add": () => render(NewsAdd),
    "/admin/news/:id/edit": (value) => render(newsEdit, value.data.id),
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();