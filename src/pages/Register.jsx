import styled from "styled-components";
import { xs } from "../responsive";
import {
  setLoginLoading,
  setLoginFail,
  setCurrentUser,
} from "./../redux/userSlice";
import { publicFetcher } from "../utiles/apiFetcher";
import Loader from "../components/Loader";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const Error = styled.span`
  color: red;
  margin-bottom: 1rem;
  display: inline-block;
`;

function Register() {
  const loggedIn = useSelector((state) => state.user.success);
  const loading = useSelector((state) => state.user.loading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    console.log(lname, fname);
    if (
      !username ||
      !password ||
      !fname ||
      !lname ||
      !email ||
      !password ||
      !passwordConf
    ) {
      setError("all inputs are required");
    } else if (password !== passwordConf) {
      setError("passwords are not the same");
      setPassword(null);
      setPasswordConf(null);
    } else {
      setError(null);
      try {
        dispatch(setLoginLoading());
        const res = await publicFetcher.post("/auth/register", {
          username,
          email,
          password,
        });
        dispatch(setCurrentUser({ user: res.data }));
      } catch (error) {
        console.log(error);
        dispatch(setLoginFail());
        if (error.response.data.code === 11000)
          setError("username or email have been used");
        else setError("something went wrong, try again later");
      }
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <From>
          <Input
            type="text"
            placeholder="first name"
            onChange={(e) => setFname(e.target.value)}
            value={fname || ""}
          />
          <Input
            type="text"
            placeholder="last name"
            onChange={(e) => setLname(e.target.value)}
            value={lname || ""}
          />
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username || ""}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
          <Input
            type="password"
            placeholder="password confirmation"
            onChange={(e) => setPasswordConf(e.target.value)}
            value={passwordConf || ""}
          />
          {loading && <Loader />}
          {!loading && <Button onClick={handleRegister}>create</Button>}
        </From>

        {error && <Error>{error}</Error>}

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
