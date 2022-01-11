import News from "../components/news";
const NewsPage = {
    print() {
        return `
        ${News.print()}
        `;
    }
}
export default NewsPage;