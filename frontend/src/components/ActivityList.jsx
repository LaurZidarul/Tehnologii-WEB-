
import ActivityCard from "./ActivityCard.jsx";
import styles from "./ActivityList.module.css";

export default function ActivityList({ activities, onToggle, onDelete }) {
  if (activities.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        No wellness activities yet.
      </p>
    );
  }

  return (
    <div className={styles.list}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
