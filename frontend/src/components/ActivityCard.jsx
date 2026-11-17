
import { Link } from "react-router-dom";
import { PRIORITY_LABELS } from "../constants.js";
import styles from "./ActivityCard.module.css";

export default function ActivityCard({ activity, onToggle, onDelete }) {
  const priorityClass = {
    Low: styles.priorityLow,
    Medium: styles.priorityMedium,
    High: styles.priorityHigh,
  };

  return (
    <article
      className={`${styles.card} ${activity.completed ? styles.done : ""}`}
      data-testid="item"
      data-id={activity.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={activity.completed}
          onChange={() => onToggle(activity.id)}
          aria-label={`Complete ${activity.name}`}
          data-testid="item-toggle"
        />

        <Link
          to={`/activities/${activity.id}`}
          className={styles.titleLink}
          data-testid="item-link"
        >
          <h3>{activity.name}</h3>
        </Link>
      </div>

      <p
        className={`${styles.priority} ${
          priorityClass[activity.priority] || ""
        }`}
      >
        Priority: {PRIORITY_LABELS[activity.priority] ?? activity.priority}
      </p>

      <p className={styles.status}>
        {activity.completed ? "Completed ✓" : "Active"}
      </p>

      <button
        type="button"
        className={styles.delete}
        onClick={() => onDelete(activity.id)}
        aria-label={`Delete ${activity.name}`}
        data-testid="item-delete"
      >
        Delete
      </button>
    </article>
  );
}
