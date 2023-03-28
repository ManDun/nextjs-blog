import { Content } from "../pages./components/Content.js";
import { Box } from "../pages./components/Box.js";

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
