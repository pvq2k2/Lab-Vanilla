import Logo from "./logo";
import Nav from "./nav";

const Header = {
    print() {
        return `
        <header>
        ${Logo.print()}
        ${Nav.print()}
        </header>
        <!-- End header -->
        `;
    }
}
export default Header;