import Logo from "./logo";
import Nav from "./nav";

const Header = {
    print() {
        return `
        <header id="header">
        ${Logo.print()}
        ${Nav.print()}
        </header>
        `;
    }
}
export default Header;