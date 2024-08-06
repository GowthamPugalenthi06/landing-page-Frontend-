import logo from "../images/logo.png";
import toggle from "../images/list.png";
import prop from "../images/prop.png";
import { TiStopwatch } from "react-icons/ti";
import gp from "../images/gp.png";
import star from "../images/star.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { FaTrophy } from "react-icons/fa6";
import { TbPresentationAnalytics } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import Footer from "./footer";
import { useState } from "react";
// import First from "../compound/first";
// import Second from "../compound/second"
// import Third from "../compound/third";
// import {Link} from 'react-router-dom'
import trans from "../images/trans.jpg";
import reci from "../images/reci.jpg";
import sales from "../images/sales.jpg";
function Landing() {
  const form = useRef();
  const initialValue = { name: "Receipt Printers", sub: "Purpose: Receipt printers generate paper or digital receipts for customers after a transaction.", img: reci ,colour:"#c89b78"};
  const [values, setValue] = useState([initialValue]);
  const newValue1 = [{ name: "Receipt Printers", sub: "Purpose: Receipt printers generate paper or digital receipts for customers after a transaction.", img: reci,colour:"#c89b78" }];
  const newValue2 = [{ name: "Transaction Processing", sub: "Purpose: POS software handles sales transactions, calculates totals, and tracks inventory.", img: sales,colour2:"#c89b78" }];
  const newValue3 = [{ name: "Payment Terminals", sub: "Purpose: Payment terminals process credit and debit card transactions.", img: trans,colour3:"#c89b78" }];
  
  const handleClick1 = () => {
    setValue(newValue1);
  
  };
  const handleClick2 = () => {
    setValue(newValue2);
  };
  const handleClick3 = () => {
    setValue(newValue3);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xg8co4a", "template_ha4soan", form.current, {
        publicKey: "mejkxhz8vUsKAvElT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Send Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div style={style.full}>
      <nav style={{ marginTop: "-1%" }}>
        <ul
          style={{
            padding: "0%",
            margin: "1%",
            display: "flex",
            listStyle: "none",
          }}
        >
          <li style={style.headernav}>
            <img src={toggle} style={style.toggle}></img>
          </li>
          <li style={{ marginLeft: "3%" }}>
            <img src={logo} style={style.logo}></img>
          </li>
        </ul>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              marginTop: "-5%",
              justifyContent: "end",
            }}
          >
            <li style={style.li}>Login</li>
            <li style={style.li}>More </li>
            <li style={style.li3}>888-999-0000</li>
            <li style={style.li2}>
              <button
                style={{
                  background: "#c89b78",
                  border: "solid 0px",
                  borderRadius: "20px",
                  padding: "7px 30px ",
                  color: "white",
                }}
              >
                <b>Free trail</b>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ background: "black", width: "100%", color: "white" }}>
        <div>
          <h3
            style={{
              paddingTop: "5%",
              paddingLeft: "5%",
              letterSpacing: "5px",
            }}
          >
            POS & Payments Platform
          </h3>
          <h1 style={{ paddingLeft: "5%", fontSize: "40px" }}>
            Be the best in your business
          </h1>
          <p style={{ width: "40%", paddingLeft: "5%", fontSize: "15px" }}>
            FintechGie is the unified point of sale and payments platform
            powering the worlds best businesses at ~168,000 locations worldwide.
          </p>
          <button
            style={{
              marginLeft: "5%",
              marginBottom: "5%",
              marginTop: "2%",
              background: "#c89b78",
              border: "solid 0px",
              color: "white",
              padding: "20px 60px ",
              fontSize: "18px",
              borderRadius: "50px",
            }}
          >
            <b>Get Started</b>
          </button>
        </div>
        <img src={prop} style={{ marginTop: "-90%", marginLeft: "65%" }}></img>
      </div>
      <div>
       
        {values.map(
          (value) => (
            (
              <div key={value} style={style.mainword1} id="mainhead1">
               <div style={{ marginLeft: "22%", marginTop: "4%" }}>
          <div style={{ marginLeft: "3%" }}>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li style={{marginRight: "5.5%",fontSize: "17px",color:value.colour}}   onClick={handleClick1} >Hardware</li>
              <li style={{marginRight: "5.5%",fontSize: "17px",color:value.colour2}}  onClick={handleClick2}> Software</li>
              <li style={{marginRight: "5.5%",fontSize: "17px",color:value.colour3}}   onClick={handleClick3} > Payment Processing Service </li>
            </ul>
          </div>
          <div style={{ marginLeft: "2%" }}>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li style={{borderTop: "4px solid black",width: "12%",marginRight: "2.5%",borderColor:value.colour}}id="line1">
                <p></p>
              </li>
              <li style={{borderTop: "4px solid black",width: "11.5%",marginRight: "2.5%",borderColor:value.colour2}} id="line2">
                <p></p>
              </li>
              <li style={{borderTop: "4px solid black",width: "30.5%",marginRight: "4%",borderColor:value.colour3}} id="line3">
                <p></p>
              </li>
            </ul>
          </div>
        </div>
        <div style={style.mainword1} id="mainhead1">
                <h1 style={{ marginLeft: "5%", marginTop: "5%" }}>
                  {value.name}
                </h1>
                <p
                  style={{
                    marginLeft: "5%",
                    width: "40%",
                    fontSize: "16px",
                    marginTop: "3%",
                  }}
                >
                  {value.sub}
                </p>
                <Button
                  variant="outlined"
                  style={{
                    color: "#c89b78",
                    border: "2px solid #c89b78",
                    marginTop: "2%",
                    borderRadius: "40px",
                    marginLeft: "5%",
                    padding: "20px 85px ",
                  }}
                >
                  <b>Learn More</b>
                </Button>
                <img
                  src={value.img}
                  style={{ marginTop: -300, marginLeft: 650, width: 500 }}
                ></img>
              </div>
             </div>
            )
          )
        )}
        <div>
          <div>
            <h1 style={{ color: "#c89b78" }}>
              <center>Grow faster with FintechGie</center>
            </h1>
            <h3 style={{ width: 1000, marginLeft: 110, marginTop: 30 }}>
              <center>
                From timesaving POS tools and automations to insights that help
                you plan your next move, FintechGie helps the world’s best
                businesses get even better.
              </center>
            </h3>
            <div>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: 50,
                  marginTop: 50,
                  display: "flex",
                }}
              >
                <li style={{ marginRight: 60 }}>
                  <TiStopwatch style={{ fontSize: 40 }} />
                  <h3>
                    <b>Fast, intuitive platform</b>
                  </h3>
                  <p style={{ width: 320, fontSize: 17 }}>
                    Innovative multilocation tools, integrations and reports
                    configured for your unique business—all in one easy-to-use
                    system.
                  </p>
                </li>
                <li style={{ marginRight: 60 }}>
                  <TbPresentationAnalytics style={{ fontSize: 40 }} />
                  <h3>
                    <b>Industry-leading insights</b>
                  </h3>
                  <p style={{ width: 320, fontSize: 17 }}>
                    Performance-boosting insights so you know what to do next.
                    Real-time reporting and visibility across your entire
                    operation.
                  </p>
                </li>
                <li>
                  {/* <img src={trophy} style={{width:50}}></img> */}
                  <FaTrophy style={{ fontSize: 40 }} />
                  <h3>
                    <b>Personalized support</b>
                  </h3>
                  <p style={{ width: 320, fontSize: 17 }}>
                    Whiteglove onboarding and support from industry experts who
                    know what it takes to succeed in your market..
                  </p>
                </li>
              </ul>
            </div>
            <h1 style={{ marginTop: 40, color: "#c89b78" }}>
              <center>FintechGie Growing Community</center>
            </h1>
            <div style={{ marginLeft: 30 }}>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: 410,
                  marginTop: 30,
                  display: "flex",
                }}
              >
                <li>
                  <img src={gp}></img>
                </li>
                <li>
                  <h1 style={{ marginTop: 3, marginLeft: 10 }}>Google Play</h1>
                </li>
              </ul>
              <ul
                style={{ listStyle: "none", marginLeft: 400, marginTop: -20 }}
              >
                <li style={style.core4}>
                  <p></p>
                </li>
              </ul>
              <ul
                style={{ listStyle: "none", marginLeft: 360, display: "flex" }}
              >
                <li>
                  <h1>Rating :</h1>
                </li>
                <li>
                  <img
                    src={star}
                    style={{ marginTop: 24, marginLeft: 15 }}
                  ></img>
                </li>
                <li>
                  <img
                    src={star}
                    style={{ marginTop: 24, marginLeft: 15 }}
                  ></img>
                </li>
                <li>
                  <img
                    src={star}
                    style={{ marginTop: 24, marginLeft: 15 }}
                  ></img>
                </li>
                <li>
                  <img
                    src={star}
                    style={{ marginTop: 24, marginLeft: 15 }}
                  ></img>
                </li>
                <li>
                  <img
                    src={star}
                    style={{ marginTop: 24, marginLeft: 15 }}
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: 220, marginTop: 40 }}>
          <Card sx={{ maxWidth: 345, marginRight: 14 }} elevation={5}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  S
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="April 14, 2024"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                I have been using FintechGie since 2022, FintechGie is a
                reliable choice for businesses seeking an efficient and
                straightforward point-of-sale system. Consider your specific
                needs and budget before making a decision.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} elevation={5}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  L
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="London"
              subheader="June 01, 2024"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                FintechGie POS is a reliable and efficient choice. While it may
                have a few limitations, such as limited customization options
                and integration complexities, its overall performance makes it a
                top contender in the POS market.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div>
          <h1 style={{ color: "#c89b78", marginTop: 60 }}>
            <center>Contact Us</center>
          </h1>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div style={{ marginLeft: 255, marginTop: 60 }}>
              <div style={{ display: "flex" }}>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="from_name"
                  style={{
                    width: 347.2,
                    marginRight: 30,
                    height: 35,
                    paddingLeft: 5,
                    padding: 7,
                    border: "1px solid #ced4da",
                  }}
                ></input>
                <input
                  placeholder="Your Email"
                  type="email"
                  name="from_email"
                  style={{
                    width: 347.2,
                    paddingLeft: 5,
                    border: "1px solid #ced4da",
                  }}
                ></input>
              </div>
              <div>
                <input
                  placeholder="Subject"
                  style={{
                    marginTop: 30,
                    width: 733,
                    height: 35,
                    paddingLeft: 5,
                    padding: 7,
                    border: "1px solid #ced4da",
                  }}
                ></input>
              </div>
              <div>
                <input
                  placeholder="Message"
                  name="message"
                  style={{
                    marginTop: 30,
                    width: 740,
                    paddingBottom: 70,
                    paddingTop: 10,
                    paddingLeft: 5,
                    border: "1px solid #ced4da",
                  }}
                ></input>
              </div>
              <div>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  value="send"
                  onSubmit={sendEmail}
                  style={{
                    background: "#c89b78",
                    marginLeft: 260,
                    marginTop: 20,
                  }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

const style = {
  full: {
    fontFamily: "Poppins",
    fontSize: "14px",
  },
  core: {
    marginRight: "5.5%",
    fontSize: "17px",
  },

  core1: {
    borderTop: "4px solid black",
    width: "12%",
    marginRight: "2.5%",
  },
  core2: {
    borderTop: "4px solid black",
    width: "11.5%",
    marginRight: "2.5%",
  },
  core3: {
    borderTop: "4px solid black",
    width: "30.5%",
    marginRight: "4%",
  },
  core4: {
    borderTop: "4px solid #c89b78",
    width: "35.5%",
  },

  li: {
    marginRight: "4%",
  },
  li2: {
    marginRight: "3%",
    marginTop: "-4px",
    marginLeft: "-1%",
  },
  li3: {
    marginRight: "3%",
    color: "#c89b78",
  },
  headernav: {
    width: "01%",
    marginTop: "2%",
  },
  toggle: {
    width: "200%",
  },
  logo: {
    width: "20%",
  },
  mainword1: {
    marginTop: "5%",
    display: "block",
  },
  mainword2: {
    display: "none",
  },
  mainword3: {
    display: "none",
  },
};
export default Landing;
