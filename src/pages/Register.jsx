import styled from "styled-components";
import { xs } from "../responsive";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperset.com/w/full/5/4/d/395676.jpg") center;
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  min-height: 30vh;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 2rem;
`;
const From = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  ${xs({
    flexDirection: "column",
  })}
`;

const Input = styled.input`
  width: 48%;
  /* flex: 1; */
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid lightgray;

  ${xs({
    width: "100%",
  })}

  ::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: 1px solid teal;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  margin: 0 0 1rem;
  padding: 1rem;
  width: 40%;
  border: none;
  background-color: teal;
  color: white;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;

const Aggrement = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  b {
    text-transform: uppercase;
  }
`;

const Link = styled.a`
  &:visited,
  & {
    text-transform: capitalize;
    display: block;
    color: black;
    text-decoration: underline;
    margin: 0.5rem 0;
  }
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <From>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="password confirmation" />
          <Button>create</Button>
        </From>

        <Aggrement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>privacy policy</b>
        </Aggrement>

        <Link href="#">Already have account</Link>
      </Wrapper>
    </Container>
  );
}

export default Register;
