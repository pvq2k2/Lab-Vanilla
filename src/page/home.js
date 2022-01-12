import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import News from "../components/news";
import Student from "../components/student";

const HomePage = {
    print() {
        return `
        <div class="max-w-[980px] font-sans m-auto">
        ${Header.print()}
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
        ${Footer.print()}
        </div>
        `;
    }
}
export default HomePage;