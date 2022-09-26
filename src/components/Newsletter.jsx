import styled from "styled-components";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { mobile, xs } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #ffff0045;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin-bottom: 2rem;
  text-transform: capitalize;

  ${xs({
    fontSize: "5rem",
  })}
`;
const Paragraph = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2.5rem;

  ${xs({
    fontSize: "2rem",
  })}
`;
const InputContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 3px;
  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  flex: 1;
  padding: 0.5rem 0 0.5rem 2rem;
  outline: none;
  border: none;
  height: 100%;

  ::placeholder {
    color: gray;
    font-style: italic;
  }
`;
const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: teal;
  color: white;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Paragraph>Get timely updates from your favorite products.</Paragraph>

      <InputContainer>
        <Input placeholder="write your email to get latest" />
        <Button>
          <MailOutlineOutlinedIcon style={{ fontSize: "3rem" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
