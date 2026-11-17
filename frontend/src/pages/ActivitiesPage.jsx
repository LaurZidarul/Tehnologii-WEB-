
import { useState, useEffect } from "react";
import ActivityList from "../components/ActivityList.jsx";
import ActivityForm from "../components/ActivityForm.jsx";
import {
  fetchActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../api.js";
import styles from "./ActivitiesPage.module.css";

export default function ActivitiesPage() {
  const [activitati, setActivitati] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadActivities();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(activity) {
    const created = await createActivity(activity);
    setActivitati((prev) => [...prev, created]);
  }

  async function handleToggle(id) {
    const activity = activitati.find((item) => item.id === id);
    if (!activity) return;

    try {
      setError(null);

      const updated = await updateActivity(id, {
        completed: !activity.completed,
      });

      setActivitati((prev) =>
        prev.map((item) => (item.id === id ? updated : item))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      setError(null);
      await deleteActivity(id);

      setActivitati((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  }

  const active = activitati.filter(
    (activity) => !activity.completed
  ).length;

  return (
    <main className="container">
      <div className={styles.content}>
        <section className="wellness-form-section">
          <h2>Add a little wellness ♡</h2>
          <ActivityForm onAdd={handleAdd} />
        </section>

        <section className="wellness-activities-section">
          <h2>My wellness activities</h2>

          <div className={styles.stats}>
            <span className="stat-pill stat-pink">
              {activitati.length} activities
            </span>
            <span className="stat-pill stat-sage">
              {active} active
            </span>
          </div>

          {loading && (
            <p className="loading-message" data-testid="loading">
              Loading wellness activities...
            </p>
          )}

          {error && (
            <p
              className="error-message"
              role="alert"
              data-testid="error"
            >
              Something went wrong: {error}
            </p>
          )}

          {!loading && (
            <ActivityList
              activities={activitati}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </div>

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
              Grow at your own pace, and keep close the
              people who help you bloom.
            </h2>

            <p className="friendship-description">
              Wellbeing is also about the people who make
              ordinary days feel special.
            </p>

            <p className="friendship-signature">
              trspz &lt;3
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
