import styled from "styled-components";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #c4dfef45;
  height: 35rem;
  width: 100%;
`;

const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  position: absolute;
  height: 75%;
  width: 90%;
  object-fit: contain;
`;
const Actions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div`
  padding: 1.2rem;
  background-color: white;
  opacity: 0.7;
  border-radius: 50%;
  color: grey;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addProduct({
        product: {
          ...item,
          selectedColor: item.colors[0],
          selectedSize: item.sizes[0],
        },
        price: item.price,
        quantity: 1,
      })
    );
  };
  return (
    <Container>
      <Circle />

      <Image src={item.img} alt="product" />

      <Actions>
        <Icon onClick={handleAddToCart}>
          <ShoppingCartOutlinedIcon style={{ fontSize: "2.5rem" }} />
        </Icon>

        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon style={{ fontSize: "2.5rem" }} />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlinedIcon style={{ fontSize: "2.5rem" }} />
        </Icon>
      </Actions>
    </Container>
  );
};

export default Product;
