"use client";

import Link from "next/link";

export default function TestPage() {
  return (
    <div className="container mt-5">
      <h1>Loading Bar Test Page</h1>
      <p>Click the links below to test the loading bar functionality:</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Internal Navigation</h5>
              <p className="card-text">
                Test the loading bar with internal links:
              </p>
              <div className="d-flex flex-column gap-2">
                <Link href="/" className="btn btn-primary">
                  Go to Home
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  Go to About
                </Link>
                <Link href="/portfolio" className="btn btn-success">
                  Go to Portfolio
                </Link>
                <Link href="/contact" className="btn btn-info">
                  Go to Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">External Links</h5>
              <p className="card-text">
                These should not trigger the loading bar:
              </p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="https://google.com"
                  className="btn btn-outline-primary"
                  target="_blank"
                >
                  Google (External)
                </a>
                <a
                  href="mailto:test@example.com"
                  className="btn btn-outline-secondary"
                >
                  Email Link
                </a>
                <a href="tel:+1234567890" className="btn btn-outline-success">
                  Phone Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3>Features of the Loading Bar:</h3>
        <ul>
          <li>✅ Shows at the top of the page during navigation</li>
          <li>✅ Smooth progress animation with shimmer effect</li>
          <li>✅ Detects internal navigation automatically</li>
          <li>✅ Ignores external links, email, and phone links</li>
          <li>✅ Works with browser back/forward buttons</li>
          <li>✅ Customizable color and height</li>
          <li>✅ Optional spinner overlay</li>
        </ul>
      </div>
    </div>
  );
}
