
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="container">
      <section className="wellness-form-section">
        <h2>About Planner Wellness</h2>

        <p>
          Planner Wellness is a simple web application
          designed to help users organize their daily
          wellness activities.
        </p>

        <p>
          Users can add, view, complete and delete
          activities, as well as check their details
          on individual pages.
        </p>

        <h3>Technologies used</h3>

        <ul>
          <li>React and Vite</li>
          <li>React Router</li>
          <li>CSS Modules</li>
          <li>JSON Server</li>
        </ul>

        <Link to="/">Back to activities</Link>
      </section>
    </main>
  );
}
