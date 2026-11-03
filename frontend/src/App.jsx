
import { useState, useEffect } from "react";
import ActivityList from "./components/ActivityList.jsx";
import { fetchActivities } from "./api.js";

export default function App() {
  const [activitati, setActivitati] = useState([]);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    let ignore = false;

    async function loadActivities() {
      try {
        const data = await fetchActivities();

        if (!ignore) {
          setActivitati(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadActivities();

    return () => {
      ignore = true;
    };
  }, []);

  function handleToggle(id) {
    setActivitati((prev) =>
      prev.map((activitate) =>
        activitate.id === id
          ? { ...activitate, completed: !activitate.completed }
          : activitate
      )
    );
  }

  function handleDelete(id) {
    setActivitati((prev) =>
      prev.filter((activitate) => activitate.id !== id)
    );
  }

  const active = activitati.filter(
    (activitate) => !activitate.completed
  ).length;

  return (
    <>
      <header className="header botanical-header">
        <div className="header-content">
          <div className="header-text">
            <span className="header-eyebrow">
              ✿ YOUR LITTLE SELF-CARE CORNER
            </span>

            <h1>Planner Wellness</h1>

            <p className="header-subtitle">
              Small rituals, softer days ♡
            </p>

            <div className="header-stats">
              <button
                type="button"
                className="theme-toggle"
                onClick={() =>
                  setTheme((prev) =>
                    prev === "light" ? "dark" : "light"
                  )
                }
              >
                {theme === "light" ? "🌙Dark mode" : "☀️Light mode"}
              </button>

              <span className="stat-pill stat-pink">
                ✿ {activitati.length} activities
              </span>

              <span className="stat-pill stat-sage">
                {active} active
              </span>
            </div>
          </div>

          <img
            src="/botanical.svg"
            alt=""
            className="botanical-illustration"
          />
        </div>
      </header>

      <main className="container">
        <section>
          <h2>My wellness activities</h2>

          {loading ? (
            <p className="loading-message">
              Loading wellness activities...
            </p>
          ) : error ? (
            <p className="error-message" role="alert">
              Could not load activities: {error}
            </p>
          ) : (
            <ActivityList
              activities={activitati}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>

        <section className="friendship-section">
          <div className="friendship-content">
            <div className="polaroid">
              <img
                src="/friends.jpeg"
                alt="A special moment with my friends"
                className="friends-photo"
              />

              <p className="polaroid-caption">
                little moments, big feelings ♡
              </p>
            </div>

            <div className="friendship-text">
              <span className="friendship-eyebrow">
                A LITTLE REMINDER
              </span>

              <h2>
                Grow at your own pace, and keep close
                the people who help you bloom.
              </h2>

              <p className="friendship-description">
                Wellbeing is also about the people who
                make ordinary days feel special.
              </p>

              <p className="friendship-signature">
                trspz &lt;3
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
