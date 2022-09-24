import React from "react";
import styled from "styled-components";
// import { makeStyles } from "@material-ui/core/styles";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// const useStyles = makeStyles((theme) => ({
//   badge: {
//     fontSize: 30,
//   },
// }));

const Container = styled.div`
  height: 6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  text-transform: uppercase;
`;

const SearchContainer = styled.div`
  border: 1px solid #a3a3a3;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Input = styled.input`
  padding: 0.2rem 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const Navbar = () => {
  // const classes = useStyles();
  return (
    <Container>
      <Left>
        <Language>en</Language>
        <SearchContainer>
          <Input />
          <SearchIcon style={{ fontSize: "1.6rem", color: "#a3a3a3" }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>shopify</Logo>
      </Center>
      <Right>
        <Item>register</Item>
        <Item>login</Item>
        <Item>
          <Badge
            badgeContent={3}
            color="primary"
            style={{ fontSize: "1.6rem" }}
            // classes={{ badge: classes.badge }}
          >
            <ShoppingCartOutlinedIcon style={{ fontSize: "2.8rem" }} />
          </Badge>
        </Item>
      </Right>
    </Container>
  );
};

export default Navbar;
