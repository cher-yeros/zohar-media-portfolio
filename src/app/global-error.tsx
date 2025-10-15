"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="text-center">
              <div className="mx-auto h-24 w-24 text-red-500 mb-6">
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Application Error
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A critical error occurred in the application. Our team has been
                notified and is working to fix this issue.
              </p>
            </div>

            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    What can you do?
                  </h2>
                  <div className="space-y-4">
                    <button
                      onClick={reset}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                      Try Again
                    </button>

                    <button
                      onClick={() => (window.location.href = "/")}
                      className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                      Go Home
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Need immediate assistance?
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      If this problem persists, please contact our support team.
                    </p>
                    <a
                      href="mailto:support@zoharmedia.net"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                      Email Support
                    </a>
                  </div>
                </div>

                {process.env.NODE_ENV === "development" && (
                  <div className="border-t border-gray-200 pt-6">
                    <details className="text-sm">
                      <summary className="font-medium text-gray-900 cursor-pointer hover:text-gray-700">
                        Error Details (Development Only)
                      </summary>
                      <div className="mt-2 p-3 bg-gray-100 rounded-md">
                        <pre className="text-xs text-gray-700 whitespace-pre-wrap overflow-auto">
                          {error.message}
                          {error.stack && `\n\nStack trace:\n${error.stack}`}
                        </pre>
                      </div>
                    </details>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
