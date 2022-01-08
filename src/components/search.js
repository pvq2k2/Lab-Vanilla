const Search = {
    print() {
        return `
        <div class="search">
        <input type="text" class="border-2 h-[20px] mt-[5px] text-[12px] hover:border-[#272f54] ease-in duration-300 focus:outline-none">
        <input type="submit" value="Tìm kiếm" class="border-2 h-[20px] bg-[#272f54] text-[12px] text-white px-[15px] mt-[10px] hover:border-[#272f54] ease-in duration-300">
        </div>
        `;
    }
}
export default Search;