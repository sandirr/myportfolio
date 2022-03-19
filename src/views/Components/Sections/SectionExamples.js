import { useEffect } from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
// import Button from "components/CustomButtons/Button.js";

import sembuh from "assets/img/sembuh.png";
import dashboardsembuh from "assets/img/dashboardsembuh.png";
import mitra from "assets/img/mitra.png";
import backoffice from "assets/img/backoffice.png";
import taruhe from "assets/img/taruhe.png";
import pengaju from "assets/img/pengaju.png";
import ppkestraki from "assets/img/ppkestraki.png";
import admin from "assets/img/admin.png";
import sanchat from "assets/img/sanchat.png";
import irsandicafe from "assets/img/irsandicafe.png";
import tidakcovid from "assets/img/tidakcovid.png";
import tiketku from "assets/img/tiketku.png";
import experience from "assets/img/kopidate.png";
import kd from "assets/img/kd.png";
// import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(styles);

const dataPortfolio = [
  { name: "Kopi Date", img: kd, link: "https://kopidate.com" },
  { name: "Experience Web App by Kopi Date", img: experience, link: "https://experience.kopidate.com" },
  { name: "Landing Page Sembuh", img: sembuh, link: "https://sembuh.id" },
  {
    name: "Admin Portal Sembuh",
    img: dashboardsembuh,
    link: "https://dashboard.sembuh.id",
  },
  {
    name: "Gealileo Mitra Powered by Telkom Indonesia",
    img: mitra,
    link: "http://dtplogistik-frontend-mitra-dev.vsan-apps.playcourt.id/",
  },
  {
    name: "Taruhe Powered by Ministry of Education and Culture",
    img: taruhe,
    link: "https://play.google.com/store/apps/details?id=com.taruhe",
  },
  {
    name: "BackOffice Gealileo Powered by Telkom Indonesia",
    img: backoffice,
    link: "http://dtp-budget-frontend-user-management-dev.vsan-apps.playcourt.id/",
  },
  {
    name: "Gealileo Pengaju Powered by Telkom Indonesia",
    img: pengaju,
    link: "http://budget.gealileo-telkom.id/",
  },
  {
    name: "Sanchat",
    img: sanchat,
    link: "https://bit.ly/Sanchat",
  },
  {
    name: "Perkumpulan Profesi Kesehatan Tradisional Komplementer Indonesia",
    img: ppkestraki,
    link: "https://ppkestraki.id",
  },
  {
    name: "Gealileo Admin Powered by Telkom Indonesia",
    img: admin,
    link: "http://budget-admin.gealileo-telkom.id/",
  },
  {
    name: "IrsandiCafe",
    img: irsandicafe,
    link: "https://bit.ly/irsandicafe",
  },
  {
    name: "TidakCovid-19",
    img: tidakcovid,
    link: "http://tidakcovid-19.web.app/",
  },
  {
    name: "Tiketku",
    img: tiketku,
    link: "https://bit.ly/Tiketku-andro",
  },
  // {name:'', img: ,link:''},
];
export default function SectionExamples() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          {dataPortfolio.map((item, index) => (
            <GridItem
              xs={12}
              sm={12}
              md={6}
              style={{ marginBottom: 20 }}
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <a
                href={item.link}
                target="_blank"
                className={classes.link}
                rel="noreferrer"
              >
                <h4 style={{ color: "#000" }}>{item.name}</h4>
                <img
                  src={item.img}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </a>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
