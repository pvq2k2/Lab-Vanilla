import Banner from "../components/banner";
import News from "../components/news";
import Student from "../components/student";

const HomePage = {
    print() {
        return `
        <section class="banner mt-[10px] truncate">
        ${Banner.print()}
        </section>
        <!-- End banner -->
        <section class="news">
        ${News.print()}
        </section>
        <!-- End news -->
        <section class="student">
        ${Student.print()}
        </section>
        <!-- End student -->
        `;
    }
}
export default HomePage;