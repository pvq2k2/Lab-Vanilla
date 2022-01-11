import Logo from "./logo";
import Nav from "./nav";

const Header = {
    print() {
        return `
        ${Logo.print()}
        ${Nav.print()}
        `;
    }
}
export default Header;