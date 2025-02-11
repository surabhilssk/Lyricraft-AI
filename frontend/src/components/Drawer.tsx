import { useState } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to show the drawer */}
      <div className="text-center">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 hover:text-white text-slate-500"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Overlay (only rendered when the drawer is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        className={`fixed top-0 left-0 z-40 w-72 h-screen p-4 transition-transform duration-300 rounded-tr-3xl bg-slate-900 scrollbar-hide ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        // Prevent clicks within the drawer from bubbling up to the overlay
        onClick={(e) => e.stopPropagation()}
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-400 uppercase"
        >
          History
        </h5>

        {/* Close drawer button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-500 hover:text-gray-900 rounded-full text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="flex flex-col justify-between h-full rounded-lg">
          <div className="py-4 overflow-y-auto rounded-lg flex-grow mt-3 scrollbar-hide">
            <ul className="space-y-2 font-medium">
              {/* Example menu items */}
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              {/* Other menu items go here */}
            </ul>
          </div>
          <div className="mb-7 mt-3 text-center">
            <InteractiveHoverButton>Logout</InteractiveHoverButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
