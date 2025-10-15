import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.571M15 6.343A7.962 7.962 0 0112 4c-2.34 0-4.29 1.009-5.824 2.571"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Let's get you back on track
              </h3>
              <div className="space-y-4">
                <Link
                  href="/"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Go Home
                </Link>

                <Link
                  href="/portfolio"
                  className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  View Portfolio
                </Link>

                <Link
                  href="/services"
                  className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-center">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Popular Pages
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link
                    href="/about"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="text-center">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Still can't find what you're looking for?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help you find what you need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
