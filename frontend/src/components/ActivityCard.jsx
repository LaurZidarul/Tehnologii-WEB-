
const PRIORITY_LABELS = {
  Low: "Low",
  Medium: "Medium",
  High: "High"
};

export default function ActivityCard({ activity, onToggle, onDelete }) {
  return (
    <article
      className={
        activity.completed
          ? "activity-card done"
          : "activity-card"
      }
    >
      <label className="activity-main">
        <input
          type="checkbox"
          checked={activity.completed}
          onChange={() => onToggle(activity.id)}
        />

        <h3>{activity.name}</h3>
      </label>

      <p className={`priority priority-${activity.priority.toLowerCase()}`}>
        Priority: {PRIORITY_LABELS[activity.priority]}
      </p>

      <p className="status">
        {activity.completed ? "Completed ✓" : "Active"}
      </p>

      <button
        type="button"
        className="activity-delete"
        onClick={() => onDelete(activity.id)}
        aria-label={`Delete ${activity.name}`}
      >
        Delete 
      </button>
    </article>
  );
}
