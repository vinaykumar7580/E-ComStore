import Dropdown from "./Dropdown";
import logo from "./ecomstore-logo.png"

function Navbar() {
  return (
    <div className="bg-gray-800 h-14 text-white flex justify-between items-center py-2.5 px-28">
      <div className="flex justify-center items-center gap-3">
        <div className="w-32 border border-gray-300 overflow-hidden">
            <img className="w-full h-full object-cover" src={logo} alt="logo" />
        </div>
        <div className="flex justify-center items-center gap-5">
          <p className="px-2.5 cursor-pointer">Dashboard</p>
          <p className="px-2.5 cursor-pointer">Team</p>
          <p className="px-2.5 cursor-pointer">Projects</p>
          <p className="px-2.5 cursor-pointer">Calendar</p>
          <p className="px-2.5 cursor-pointer">Reports</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div>
          <div class="bg-gray-800 flex justify-center items-center">
            <div class="relative py-2">
              <div class="t-0 absolute left-4 top-2">
                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  1
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="file: mt-2 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-2.5 cursor-pointer">
            <Dropdown/>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
