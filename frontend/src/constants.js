
export const PRIORITIES = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const PRIORITY_LABELS = Object.fromEntries(
  PRIORITIES.map((priority) => [priority.value, priority.label])
);

export const CATEGORIES = [
  { value: "Self-care", label: "Self-care" },
  { value: "Health", label: "Health" },
  { value: "Fitness", label: "Fitness" },
];
