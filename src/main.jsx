import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import PrismDodecahedronPage from "@/pages/PrismDodecahedron";
import "@/styles/theme-dark.css";
import "@/index.css";

class PrismRootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error("Prism root crash", error);
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#070707",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "min(42rem, 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "24px",
            padding: "1.5rem",
            background: "rgba(255,255,255,0.04)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          }}
        >
          <p style={{ margin: 0, color: "#f4d35e", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.8rem" }}>
            Prism Load Error
          </p>
          <h1 style={{ margin: "0.75rem 0 0", fontSize: "1.6rem" }}>
            The Prism page crashed while loading.
          </h1>
          <pre
            style={{
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "16px",
              whiteSpace: "pre-wrap",
              background: "rgba(0,0,0,0.28)",
              color: "#ffd9d9",
              overflow: "auto",
            }}
          >
            {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
          </pre>
        </div>
      </main>
    );
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/prism-dodecahedron" replace />,
  },
  {
    path: "/prism-dodecahedron",
    element: <PrismDodecahedronPage />,
  },
  {
    path: "*",
    element: <Navigate to="/prism-dodecahedron" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrismRootErrorBoundary>
      <RouterProvider router={router} />
    </PrismRootErrorBoundary>
  </React.StrictMode>
);
