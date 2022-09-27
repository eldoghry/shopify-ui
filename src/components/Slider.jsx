import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { mobile } from "../responsive";
import { sliders } from "../fakeData.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  ${mobile({
    display: "none",
  })}
`;

const Arrow = styled.span`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "1rem"};
  right: ${(props) => props.direction === "right" && "1rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 3;
`;
const Wrapper = styled.div`
  height: calc(100vh - 9rem);

  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  transform: translateX(${(props) => props.indexPage * -100}vw);
  transition: all 1.5s;

  /* &:before {
    content: "";
    width: 25vw;
    height: 25vw;
    background-color: teal;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 10rem;
    margin: auto;
    margin-left: 1rem;
  } */
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  /* position: relative; */
  z-index: 2;
`;
const Image = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: contain;
`;
const TextContainer = styled.div`
  flex: 1;
  width: 50vw;
`;
const Heading = styled.h1`
  font-size: 8rem;
  text-transform: uppercase;
  margin-bottom: 2.8rem;
`;
const Paragraph = styled.p`
  font-size: 2.5rem;
  letter-spacing: 3px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 1rem;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 3px;
  font-weight: 500;
  border: 2px solid #252525;
  transition: all 0.3s ease;
  &:hover {
    background-color: teal;
    color: white;
    border-color: transparent;
  }
`;

const SliderPage = () => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex + 1 > 2 ? 0 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex - 1 < 0 ? 2 : slideIndex - 1);
    }

    console.log(slideIndex);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleArrow("left")}>
        <ArrowLeftOutlinedIcon style={{ fontSize: "3rem" }} />
      </Arrow>
      <Wrapper>
        {sliders.map((slide) => (
          <Slide bg={slide.color} indexPage={slideIndex} key={slide.id}>
            <ImageContainer>
              <Image src={slide.img} alt={slide.title} />
            </ImageContainer>
            <TextContainer>
              <Heading>{slide.title}</Heading>
              <Paragraph>{slide.desc}</Paragraph>
              <Button onClick={() => navigate("/products")}>shop now</Button>
            </TextContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleArrow("right")}>
        <ArrowRightOutlinedIcon style={{ fontSize: "3rem" }} />
      </Arrow>
    </Container>
  );
};

export default SliderPage;
