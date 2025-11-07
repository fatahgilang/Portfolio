import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";

// Penanganan error yang lebih lengkap
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const errorHandler = (event) => {
      console.error('Global error:', event.error);
      setError(event.error);
      setHasError(true);
    };

    const rejectionHandler = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      setError(event.reason);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', rejectionHandler);
    
    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div style={{ padding: '20px', color: 'red', textAlign: 'center', marginTop: '50px' }}>
        <h1>Terjadi kesalahan dalam aplikasi</h1>
        <p>Silakan periksa console browser untuk detail lebih lanjut.</p>
        <details style={{ marginTop: '20px', textAlign: 'left', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
          <summary>Error Details</summary>
          <pre>{error?.toString()}</pre>
        </details>
      </div>
    );
  }

  return children;
};

// Memastikan DOM siap sebelum render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </React.StrictMode>
    );
  });
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
