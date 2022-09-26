import styled from "styled-components";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import { tablet, xs } from "../responsive";

const Container = styled.div`
  height: 50vh;
  display: flex;
  justify-content: space-between;
  padding: 3rem;

  ${tablet({
    height: "35vh",
    padding: "1rem",
    justifyContent: "center",
  })}

  ${xs({
    height: "70vh",
    padding: "1rem",
    flexDirection: "column",
    justifyContent: "center",
  })}
`;

const Left = styled.div`
  flex: 1;
  ${tablet({
    display: "none",
  })}
`;
const Logo = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;
const Desc = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
  width: 80%;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: aqua;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  svg {
    fill: white;
    font-size: 2.3rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Heading = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  ${xs({
    // textAlign: "center",
  })}
`;
const Link = styled.li`
  width: 50%;
  padding: 0.6rem 0;
  font-size: 1.8rem;
  font-weight: 300;
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  svg {
    font-size: 2.3rem;
    margin-right: 1rem;
  }

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  height: 4rem;
  object-fit: contain;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopify.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
          temporibus dignissimos excepturi blanditiis! Quos maxime vel provident
          placeat, dolorem incidunt, voluptates dolore, adipisci autem maiores
          aspernatur dolorum perferendis distinctio.
        </Desc>

        <SocialContainer>
          <SocialIcon style={{ backgroundColor: "#3b5998" }}>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon style={{ backgroundColor: "#1da1f2" }}>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon style={{ backgroundColor: "#bd081c" }}>
            <PinterestIcon />
          </SocialIcon>

          <SocialIcon style={{ backgroundColor: "#c32aa3" }}>
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Heading>useful links</Heading>
        <Links>
          <Link>Home</Link>
          <Link>Man Fashion</Link>
          <Link>Women Fashion</Link>
          <Link>Accessories</Link>
          <Link>Order Traking</Link>
          <Link>wishlist</Link>
          <Link>cart</Link>
          <Link>my account</Link>
          <Link>terms</Link>
        </Links>
      </Center>
      <Right>
        <Heading>contact</Heading>
        <ItemWrapper>
          <Item>
            <RoomOutlinedIcon /> 35 uptown, Cairo, Egypt
          </Item>

          <Item>
            <LocalPhoneOutlinedIcon /> +2 012 345 6789
          </Item>

          <Item>
            <MailOutlineOutlinedIcon /> moh.mag.ali@gmail.com
          </Item>
        </ItemWrapper>
        <Image
          src="https://www.logolynx.com/images/logolynx/0f/0f088bebfc9847194a0c2c021b97dda4.jpeg"
          alt="payment"
        />
      </Right>
    </Container>
  );
};

export default Footer;
