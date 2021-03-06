import { menuList } from "../data";

const Menu = {
    print() {
        return `
        <div class="menu">
        <ul>
        ${menuList.map( ({name, path}) => `
            <li class="inline-block"><a class="block text-white px-[20px] py-[8px] font-semibold hover:bg-[#272f54]" href="${path}">${name}</a></li>
        `).join("")}
        </ul>
        </div>
        `;
    }
}

export default Menu;