
import ActivityCard from "./ActivityCard.jsx";

export default function ActivityList({ activities }) {
  if (activities.length === 0) {
    return (
      <p className="empty">
        No wellness activities yet.
      </p>
    );
  }

  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </div>
  );
}
