import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile, xs, labtop } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicFetcher } from "../utiles/apiFetcher";
import Loader from "../components/Loader";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  margin-right: 2rem;
  padding: 2rem;

  ${mobile({
    marginRight: "0",
    marginBottom: "2rem",
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 2.2rem;
`;
const Desc = styled.p`
  width: 80%;
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;

  ${labtop({
    width: "100%",
  })}
`;
const Price = styled.span`
  font-size: 4rem;
  font-weight: 100;
  margin-bottom: 1.5rem;
`;
const FilterContainer = styled.div`
  width: 60%;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  ${labtop({
    width: "100%",
  })}

  ${xs({
    flexDirection: "column",
    gap: "1rem",
  })}
`;
const Filter = styled.div``;

const FilterTittle = styled.span`
  margin-right: 1rem;
`;

const Colors = styled.div`
  display: flex;
  margin: 1rem 0;
`;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  background-color: ${(props) => props.color};
  cursor: pointer;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Select = styled.select`
  text-transform: capitalize;
  padding: 0.8rem 1rem;
  border-color: lightgray;
`;
const Option = styled.option`
  font-size: 1.6rem;
  font-weight: 200;
`;

const CTA = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${labtop({
    width: "100%",
  })}
`;

const AmountContainer = styled.div`
  display: flex;
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

const Amount = styled.span`
  border: 1px solid lightgray;
  padding: 0.7rem 1.5rem;
  border-radius: 3px;
  margin: 0 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  align-self: flex-start;
  background-color: teal;
  color: white;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        console.log("render product in single product page");
        const res = await publicFetcher(`/product/${id}`);
        setProduct(res.data);
        setSize(res.data.sizes[0]);
        setColor(res.data.colors[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <ImageContainer>
          <Image alt={product.title} src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>

          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTittle>Color</FilterTittle>
              <Colors>
                {product.colors.map((c) => (
                  <Color color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </Colors>
            </Filter>

            <Filter>
              <FilterTittle>size</FilterTittle>
              <Select onChange={(e) => setSize(e.target.value)}>
                <Option disabled>Size</Option>
                {product.sizes.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>

          <CTA>
            <AmountContainer>
              <Icon onClick={() => handleQuantity("dec")}>
                <RemoveIcon />
              </Icon>

              <Amount>{quantity}</Amount>

              <Icon onClick={() => handleQuantity("inc")}>
                <AddIcon />
              </Icon>
            </AmountContainer>
            <Button>Add to cart</Button>
          </CTA>
        </InfoContainer>
      </Container>
    </div>
  );
}

export default ProductPage;
