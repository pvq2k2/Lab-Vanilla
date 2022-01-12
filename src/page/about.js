import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    print() {
        return `
        <div class="max-w-[980px] font-sans m-auto">
        ${Header.print()}
        <h1>About Page</h1>
        ${Footer.print()}
        </div>
        `;
    }
}
export default AboutPage;