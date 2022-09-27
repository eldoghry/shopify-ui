import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import { publicFetcher } from "../utiles/apiFetcher";
import {
  setLoginLoading,
  setLoginFail,
  setCurrentUser,
} from "./../redux/userSlice";

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

const Error = styled.span`
  color: red;
  margin-bottom: 1rem;
  display: inline-block;
`;

function Login() {
  const loggedIn = useSelector((state) => state.user.success);
  const loading = useSelector((state) => state.user.loading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Username & password are required");
    } else {
      try {
        dispatch(setLoginLoading());
        const res = await publicFetcher.post("/auth/login", {
          username,
          password,
        });

        dispatch(setCurrentUser({ user: res.data }));
      } catch (error) {
        dispatch(setLoginFail());
        if (error.response.status === 401) setError(error.response.data);
        else setError("username not found");
      }
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <Container>
      <Wrapper>
        <Title>sign in</Title>
        <From>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading && <Loader />}
          {!loading && <Button onClick={handleLogin}>login</Button>}
        </From>

        {error && <Error>{error}</Error>}

        <Link href="#">don't remember my password</Link>
        <Link href="#">create new account</Link>
      </Wrapper>
    </Container>
  );
}

export default Login;
