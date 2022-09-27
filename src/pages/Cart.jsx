import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { tablet, desktop } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { updateProductQuantity } from "../redux/cartSlice";
const Container = styled.div`
  padding: 2rem;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1rem;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${tablet({
    justifyContent: "flex-end",
  })}
`;

const Button = styled.button`
  width: 20rem;
  padding: 1rem 2rem;
  border: none;
  text-transform: uppercase;
  font-weight: 600;

  ${desktop({
    padding: "1rem",
    fontSize: "1.5rem",
  })}

  ${tablet({
    display: (props) => (props.type === "summary" ? "block" : "none"),
  })}

  color: ${(props) => (props.type === "summary" ? "white" : "black")};
  background-color: ${(props) =>
    props.type === "summary" ? "black" : "transparent"};

  border: 1px solid;
  border-color: ${(props) =>
    props.type === "summary" ? "transparent" : "black"};

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  ${tablet({
    fontSize: "1.8rem",
  })}
`;

const Link = styled.a`
  cursor: pointer;
  text-transform: capitalize;
  text-decoration: underline;

  ${tablet({
    fontSize: "1.8rem",
    justifySelf: "flex-end",
  })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  ${tablet({
    flexDirection: "column",
  })}
`;

const Products = styled.div`
  flex: 3;
  /* background-color: orangered; */
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  height: 25vh;
`;

const ProductImage = styled.img`
  width: 25%;
  height: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  flex: 2;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Info = styled.div`
  margin: 1rem 0;
  text-transform: capitalize;
  font-size: 1.6rem;
`;

const Color = styled.div`
  margin: 1rem 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductQuantityContainer = styled.div`
  display: flex;
`;
const ProductDetail = styled.div`
  /* flex: 1; */
  height: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: lightgray;
  transition: all 0.3s ease;

  :hover {
    background-color: orange;
    svg {
      fill: white;
    }
  }

  svg {
    font-size: 2rem;
  }
`;

const Quantity = styled.span`
  border: 1px solid lightgray;
  padding: 0.7rem 1.5rem;
  border-radius: 3px;
  margin: 0 1rem;
`;

const ProductPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
`;

const Hr = styled.hr`
  height: 1px;
  background-color: #eee;
  border: none;

  :not(:last-child) {
    margin: 2rem 0;
  }
`;

const Summery = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2rem;
  height: 20vw;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  ${desktop({
    flex: "1.5",
    height: "25vw",
    padding: "2rem",
  })}
`;

const SummaryTitle = styled.h2`
  font-size: 3rem;
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 2rem;
  ${desktop({
    fontSize: "2.5rem",
    marginBottom: "1.2rem",
  })}
`;

const SummaryItem = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.6rem;

  font-weight: ${(props) => (props.type === "total" ? "600" : "300")};
  text-transform: uppercase;
`;

const SummaryAmount = styled.span``;

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const discount = 10;
  const shipping = 10;

  const updateQunatityHandler = (index, sign) => {
    dispatch(
      updateProductQuantity({
        index,
        sign,
      })
    );
  };

  return (
    <Container>
      <Top>
        <Title>your bag</Title>
        <TopWrapper>
          <Button>continue shopping</Button>
          <Links>
            <Link>shoppping bag(2)</Link>
            <Link>your wishlist(0)</Link>
          </Links>
        </TopWrapper>
      </Top>
      <Bottom>
        <Products>
          {cart.products.map((product, index) => (
            <div key={`${index} + ${product._id}`}>
              {index !== 0 && <Hr />}
              <Product>
                <ProductImage src={product.img} alt={product.title} />
                <ProductInfo>
                  <Info>
                    <b>Product:</b> {product.title}
                  </Info>
                  <Info>
                    <b>ID:</b> {product._id}
                  </Info>
                  <Color color={product.selectedColor} />
                  <Info>
                    <b>Size:</b> {product.selectedSize}
                  </Info>
                </ProductInfo>

                <ProductDetail>
                  <ProductQuantityContainer>
                    <Icon onClick={() => updateQunatityHandler(index, "dec")}>
                      <RemoveIcon />
                    </Icon>
                    <Quantity>{product.quantity}</Quantity>
                    <Icon onClick={() => updateQunatityHandler(index, "inc")}>
                      <AddIcon />
                    </Icon>
                  </ProductQuantityContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </ProductDetail>
              </Product>
            </div>
          ))}
        </Products>
        <Summery>
          <SummaryTitle>order summary</SummaryTitle>
          <SummaryItem>
            subtotal<SummaryAmount>{cart.total} $</SummaryAmount>
          </SummaryItem>
          <SummaryItem>
            estimated shipping<SummaryAmount>{shipping} $</SummaryAmount>
          </SummaryItem>
          <SummaryItem>
            discount<SummaryAmount>{discount} $</SummaryAmount>
          </SummaryItem>
          <SummaryItem type="total">
            Total
            <SummaryAmount>{cart.total + shipping - discount} $</SummaryAmount>
          </SummaryItem>
          <Button type="summary">checkout now</Button>
        </Summery>
      </Bottom>
    </Container>
  );
}

export default Cart;
