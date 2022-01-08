import Navigo from "navigo";

const router = new Navigo("/");

const render = (content) => {
    document.getElementById("app").innerHTML = content;
}

router.on({
    "/": () => {
        render("Home");
    },
    "/about": () => {
        render("About");
    }
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();