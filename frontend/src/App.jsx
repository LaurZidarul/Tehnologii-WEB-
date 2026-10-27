
import ActivityList from "./components/ActivityList.jsx";

const activitati = [
  { id: 1, name: "Evening skincare", completed: false, priority: "Medium" },
  { id: 2, name: "Take daily vitamins", completed: true, priority: "High" },
  { id: 3, name: "30-minute workout", completed: false, priority: "Low" }
];

export default function App() {
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
    <ActivityList activities={activitati} />
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
          ✿ A LITTLE REMINDER
        </span>

        <h2>
          Grow at your own pace,
          and keep close the people
          who help you bloom.
        </h2>

        <p className="friendship-description">
          Wellbeing is also about the people
          who make ordinary days feel special.
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
