import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperset.com/w/full/b/4/b/156509.jpg") center;

  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 30rem;
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
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid lightgray;

  ::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: 1px solid teal;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  margin: 1rem 0;
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

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>sign in</Title>
        <From>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>login</Button>
        </From>

        <Link href="#">don't remember my password</Link>
        <Link href="#">create new account</Link>
      </Wrapper>
    </Container>
  );
}

export default Login;
