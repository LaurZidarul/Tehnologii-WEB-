
const PRIORITY_LABELS = {
  Low: "Low",
  Medium: "Medium",
  High: "High"
};

export default function ActivityCard({ activity }) {
  return (
    <article
      className={
        activity.completed
          ? "activity-card done"
          : "activity-card"
      }
    >
      <h3>{activity.name}</h3>

      <p className={`priority priority-${activity.priority.toLowerCase()}`}>
        Priority: {PRIORITY_LABELS[activity.priority]}
      </p>

      <p className="status">
        {activity.completed ? "Completed ✓" : "Active"}
      </p>
    </article>
  );
}
