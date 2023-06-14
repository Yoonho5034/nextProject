import styled from "styled-components";

const Container = styled.div`
  /* width: 100%;
  max-width: 1120px; */
  width: 1120px;
  height: 100vh;
  margin: 0 auto;
  /* background-color: gray; */
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
