import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import Root from "./pages/Root";

// Dynamically import TestPage from remote module
const TestPage = lazy(() =>
  import("testModule/TestPage").catch(() => {
    return {
      default: () => (
        <div>
          Test module not available. Start portfolio-feature-staystrong server
          on port 3001.
        </div>
      ),
    };
  }),
);

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "experience", element: <Experience /> },
        { path: "team", element: <ProjectPage /> },
        {
          path: "test",
          element: (
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  Loading TEST Module...
                </div>
              }
            >
              <TestPage />
            </Suspense>
          ),
        },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
