import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { createContext } from "react";
import { DarkModeProvider } from "./contexts/DarkModeContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();
export const DarkModeContext = createContext();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
