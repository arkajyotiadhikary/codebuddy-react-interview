import Router from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
