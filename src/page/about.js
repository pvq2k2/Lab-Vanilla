import Footer from "../components/footer";
import Header from "../components/header";
import Nav from "../components/nav";

const AboutPage = {
    print() {
        return `
        ${Header.print()}
        ${Nav.print()}
        <h1>About Page</h1>
        ${Footer.print()}
        `;
    }
}
export default AboutPage;