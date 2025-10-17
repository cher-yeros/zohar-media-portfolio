"use client";

import { useState } from "react";

export default function ErrorTestPage() {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  if (shouldThrowError) {
    throw new Error("This is a test error to demonstrate error handling");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Error Handling Test Page
          </h1>
          <p className="text-lg text-gray-600">
            This page demonstrates the error handling capabilities of the
            application.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Test Error Boundary
              </h2>
              <p className="text-gray-600 mb-6">
                Click the button below to trigger an error and see how the error
                boundary handles it.
              </p>
              <button
                onClick={() => setShouldThrowError(true)}
                className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Trigger Error
              </button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Test 404 Page
              </h2>
              <p className="text-gray-600 mb-6">
                Visit a non-existent page to see the custom 404 page.
              </p>
              <div className="space-x-4">
                <a
                  href="/non-existent-page"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                  Visit Non-existent Page
                </a>
                <a
                  href="/another-fake-page"
                  className="px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                  Another Fake Page
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Error Pages Created
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    error.tsx
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Handles runtime errors within the application with a retry
                    mechanism.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Client-side error boundary</li>
                    <li>• Retry functionality</li>
                    <li>• Development error details</li>
                    <li>• Contact support option</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    not-found.tsx
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Custom 404 page for when a route is not found.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• SEO-friendly 404 page</li>
                    <li>• Navigation options</li>
                    <li>• Popular pages links</li>
                    <li>• Contact support</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    global-error.tsx
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Catches errors in the root layout and other critical areas.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Root-level error handling</li>
                    <li>• Critical error recovery</li>
                    <li>• Complete HTML structure</li>
                    <li>• Support contact</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Additional Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    loading.tsx
                  </h3>
                  <p className="text-sm text-gray-600">
                    Provides a loading state during page transitions and data
                    fetching.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Error Logging
                  </h3>
                  <p className="text-sm text-gray-600">
                    All errors are logged to the console and can be integrated
                    with error reporting services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

