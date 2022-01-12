import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
const NewsPage = {
    print() {
        return `
        <div class="max-w-[980px] font-sans m-auto">
        ${Header.print()}
        ${News.print()}
        ${Footer.print()}
        </div>
        `;
    }
}
export default NewsPage;