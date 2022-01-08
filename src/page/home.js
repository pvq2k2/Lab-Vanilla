import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import Student from "../components/student";

const HomePage = {
    print() {
        return `
        ${Header.print()}
        <div class="banner mt-[10px] truncate">
        ${Banner.print()}
        </div>
        <!-- End banner -->
        <main>
        <section class="news">
        ${News.print()}
        </section>
        <!-- End news -->
        <section class="student">
        ${Student.print()}
        </section>
        <!-- End student -->
        </main>
        ${Footer.print()}
        `;
    }
}
export default HomePage;