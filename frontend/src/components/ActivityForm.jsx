
import { useState } from "react";
import { PRIORITIES, CATEGORIES } from "../constants.js";
import styles from "./ActivityForm.module.css";

export default function ActivityForm({ onAdd }) {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Self-care");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (saving) return;

    const cleanName = name.trim();

    if (!cleanName) {
      setError("Please enter an activity name.");
      return;
    }

    if (cleanName.length > 100) {
      setError("Activity name must have at most 100 characters.");
      return;
    }

    setError("");
    setSaving(true);

    try {
      await onAdd({
        name: cleanName,
        completed: false,
        priority,
        category,
      });

      setName("");
      setPriority("Medium");
      setCategory("Self-care");
    } catch (err) {
      setError("Could not save activity. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      data-testid="form"
      noValidate
    >
      <div className={styles.field}>
        <label className={styles.label} htmlFor="activity-name">
          Activity name
        </label>

        <input
          className={styles.input}
          id="activity-name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
          placeholder="e.g. Take a mindful walk"
          maxLength={101}
          aria-invalid={Boolean(error)}
          data-testid="form-title"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="activity-category">
          Category
        </label>

        <select
          className={styles.select}
          id="activity-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          data-testid="form-category"
        >
          {CATEGORIES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="activity-priority">
          Priority
        </label>

        <select
          className={styles.select}
          id="activity-priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
          data-testid="form-priority"
        >
          {PRIORITIES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p
          className={styles.error}
          role="alert"
          data-testid="form-error"
        >
          {error}
        </p>
      )}

      <button
        className={styles.button}
        type="submit"
        disabled={saving}
        data-testid="form-submit"
      >
        {saving ? "Saving..." : "Add activity "}
      </button>
    </form>
  );
}
