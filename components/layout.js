import { Content } from "../components/Content.js";
import { Box } from "../components/Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    <Content />
  </Box>
);
