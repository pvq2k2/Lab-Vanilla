import Menu from "./menu";
import Search from "./search";

const Nav = {
    print() {
        return `
        <nav class="bg-[#cb7802] flex justify-between">
        ${Menu.print()}
        ${Search.print()}
        </nav>
        `;
    }
}
export default Nav;