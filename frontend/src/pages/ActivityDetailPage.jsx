
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchActivity } from "../api.js";
import styles from "./ActivityDetailPage.module.css";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadActivity() {
      setLoading(true);
      setError(null);
      setActivity(null);

      try {
        const data = await fetchActivity(id);

        if (!ignore) {
          setActivity(data);
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

    loadActivity();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <main className="container">
      {loading && (
        <p data-testid="loading">
          Loading activity...
        </p>
      )}

      {!loading && error && (
        <p role="alert" data-testid="error">
          Could not load activity: {error}
        </p>
      )}

      {!loading && activity && (
        <section className={styles.detail} data-testid="detail">
          <h2 data-testid="detail-title">
            {activity.name}
          </h2>

          <div className={styles.info}>
            <p>
              <strong>ID:</strong> {activity.id}
            </p>

            <p>
              <strong>Category:</strong> {activity.category}
            </p>

            <p>
              <strong>Priority:</strong> {activity.priority}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {activity.completed ? "Completed" : "Active"}
            </p>
          </div>

          <Link to="/" className={styles.back}>
            Back to activities
          </Link>
        </section>
      )}

      {!loading && error && (
        <Link to="/" className={styles.back}>
          Back to activities
        </Link>
      )}
    </main>
  );
}
