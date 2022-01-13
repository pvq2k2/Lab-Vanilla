import { newsList } from "../../data";
import NavAdmin from "./navAdmin";


const NewsAd = {
    print() {
        return /* html */`
        ${NavAdmin.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            News List
          </h1>
          <a href="/admin/news/add"><button class="bg-blue-500 py-2 px-3 text-white rounded-[10px] hover:bg-indigo-700 ease-in-out duration-200">Add News</button></a>
        </div>
      </header>
        <div class="py-10">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Image
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Content
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    
                  ${newsList.map( ({id, img, title, content}) => /* html */`
                  <tr>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 ">
                        <img class="h-1/4 w-1/4 rounded-[10px]" src="${img}" alt="">
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">${title}</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                  ${content}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/admin/news/${id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
                  
                  `).join('')}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
          </div>
        </div>

        `;
    }
}
export default NewsAd;