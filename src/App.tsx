import { ChakraProvider } from "@chakra-ui/react";
import ComponentExamples from "./ComponentExamples";

function App() {
  return (
    <ChakraProvider>
      <ComponentExamples />
    </ChakraProvider>
  );
}

export default App;
