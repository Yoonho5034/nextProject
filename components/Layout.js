import styled from "styled-components";

const Container = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  background-color: orange;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
