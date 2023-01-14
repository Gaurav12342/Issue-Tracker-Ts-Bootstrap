import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "pages/Issue";
import CreateIssue from "pages/Issue/CreateIssue";
import IssueDetail from "pages/Issue/IssueDetail";
import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App: FC = () => {
  // Create a client
  const queryClient = new QueryClient();

  useEffect(() => {
    const unloadCallback = (event: any) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [window]);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issue/:id" element={<IssueDetail />} />
            <Route path="/issue/add" element={<CreateIssue />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
