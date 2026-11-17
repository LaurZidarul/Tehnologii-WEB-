
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="container">
      <section
        className="wellness-form-section"
        data-testid="not-found"
      >
        <h2>404 - Page not found</h2>

        <p>
          The page you are looking for does not exist.
        </p>

        <Link to="/">
          Back to activities
        </Link>
      </section>
    </main>
  );
}
