
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
              <button
                type="button"
                className="theme-toggle"
                onClick={() =>
                  setTheme((prev) =>
                    prev === "light" ? "dark" : "light"
                  )
                }
              >
                {theme === "light"
                  ? "🌙 Dark mode"
                  : "☀️ Light mode"}
              </button>
            </div>

            <nav className={styles.navigation}>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                My activities
              </NavLink>

              <NavLink
                to="/despre"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                About ♡
              </NavLink>
            </nav>
          </div>

          <img
            src="/botanical.svg"
            alt=""
            className="botanical-illustration"
          />
        </div>
      </header>

      <Outlet />
    </>
  );
}
