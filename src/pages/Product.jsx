import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile, xs, labtop } from "../responsive";

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

function ProductList() {
  return (
    <div>
      <Container>
        <ImageContainer>
          <Image
            alt="product image"
            src="https://pngfolio.com/images/all_img/copy/1638427112t-shirt-png.png"
          />
        </ImageContainer>
        <InfoContainer>
          <Title>Lorem Ipsum</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            mollitia consequatur nam provident at culpa sunt facere similique
            omnis. Enim vel molestiae corrupti harum deleniti. Sed repudiandae
            voluptate quo porro.
          </Desc>

          <Price>$ 35.00</Price>

          <FilterContainer>
            <Filter>
              <FilterTittle>Color</FilterTittle>
              <Colors>
                <Color color="#555"></Color>
                <Color color="#db4242"></Color>
                <Color color="#2b5f2b"></Color>
                <Color color="#2f2f7e"></Color>
              </Colors>
            </Filter>

            <Filter>
              <FilterTittle>size</FilterTittle>
              <Select>
                <Option disabled>Size</Option>
                <Option>s</Option>
                <Option>m</Option>
                <Option>lg</Option>
              </Select>
            </Filter>
          </FilterContainer>

          <CTA>
            <AmountContainer>
              <Icon>
                <RemoveIcon />
              </Icon>
              <Amount>1</Amount>

              <Icon>
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

export default ProductList;
