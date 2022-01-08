import { studentList } from "../page/data";

const Student = {
    print() {
        return `
        <h2 class="title text-[#272f54] uppercase font-bold text-[20px] my-[20px] hover:text-[#cb7802] ease-in duration-300">HOẠT ĐỘNG SINH VIÊN</h2>
        <div class="student-content grid grid-cols-3 gap-[30px]">
        ${studentList.map( ({img, title, content}) => `
        <div class="student-content-item group border-2 px-[25px] py-[15px] hover:border-[#272f54] ease-in duration-300 shadow-blue-900">
        <div class="student-content-item-img">
            <img class="group-hover:scale-110 ease-in duration-300" src="${img}" alt="">
        </div>
        <div class="student-content-item-detail">
           <h3 class="text-[#b96442] text-[16px] font-bold my-[10px] group-hover:text-[#272f54] ease-in duration-300">${title}</h3>
           <p class="text-black text-[15px]">${content}</p>
        </div>
        </div>
        <!-- End student-content-item -->
        `).join("")}
        </div>
        <!-- End student-content -->
        `;
    }
}
export default Student;