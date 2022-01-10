import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    print() {
        return `
        ${Header.print()}
        <h1>About Page</h1>
        ${Footer.print()}
        `;
    }
}
export default AboutPage;