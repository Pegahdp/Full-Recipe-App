import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi'

const App = () => {
  return (
    <div className="">
      <Nav>
      <GiKnifeFork />
        <Logo to={'/'} >deliciousss</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};

export default App;

const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight: 400;
font-family: 'Lobster Two' , cursive;

`
const Nav = styled.div`
padding: 2rem 0rem;
display: flex;
justify-content: center;
align-items: center;

svg{
  font-size: 2rem;
}
`


