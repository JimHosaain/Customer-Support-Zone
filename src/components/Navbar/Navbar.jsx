const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-350 mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900">
              CS — Ticket System
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-8">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition flex items-center justify-center gap-2 w-full sm:w-auto">
              <span>+</span>
              <span>New Ticket</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
