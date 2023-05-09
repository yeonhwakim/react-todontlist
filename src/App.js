import { createContext } from "react";
import { Outlet, useLocation, redirect } from "react-router-dom";

import { DarkModeProvider } from "./contexts/DarkModeContext";

import NavBar from "./components/navbar/NavBar";

import "./App.css";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
// const queryClient = new QueryClient();

export const DarkModeContext = createContext();

function App() {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/") {
    redirect("/todontList");
  }

  return (
    // <QueryClientProvider client={queryClient}>
    <DarkModeProvider>
      <div className="App">
        <div className="navbar-wrapper">
          <NavBar />
        </div>
        <div className="list-wrapper">
          <Outlet />
        </div>
      </div>
    </DarkModeProvider>
    // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
}

export default App;
