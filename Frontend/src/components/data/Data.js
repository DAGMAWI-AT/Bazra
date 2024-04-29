/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import {
  CropRotate,
  PieChart,
  Settings,
  ViewInAr,
  Code,
  BarChart,
  CloudOutlined,
  FacoritBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export const nav = [
  // {
  //   text: "Home",
  //   path: "/",
  // },

  {
    text: "Services",
    path: "/services",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Partners",
    path: "/partnership",
  },
  {
    text: "News",
    path: "/blog",
  },
  {
    text: "Tender",
    path: "/tenders",
  },
  {
    text: "Contact",
    path: "/contact",
  },
  
  {
    // text: "Admin",
    path: "/admin/dashboard",
  },
  
];

export const home = [
  {
    text: <i>Lada Vesta</i>,
    title: "Bazra Motors",
    cover: process.env.PUBLIC_URL + "../hero/banner1.jpg",
  },

  // {
  //   text:<i>Lada-x-cross-5</i>,
  //   title: "Bazra Motors",
  //   cover:"../hero/lada-x-cross-5-1.jpg",
  // },

  {
    text: <i>max-vygoda-up</i>,
    title: "Bazra Motors",
    cover: process.env.PUBLIC_URL + "../hero/LastNews.jpg",
  },
  {
    text: <i>Lada Niva car</i>,
    title: "Bazra Motors",
    cover: "../hero/banner3.jpg",
  },
  {
    text: <i> Lada pres-releas</i>,
    title: "Bazra Motors",
    cover: process.env.PUBLIC_URL + "../hero/pres-releas.jpg",
  },
  {
    text: <i>Lada Niva car</i>,
    title: "Bazra Motors",
    cover: process.env.PUBLIC_URL + "../hero/main_desktop.webp",
  },

  {
    text: <i>lada raven supercar</i>,
    title: "Bazra Motors",
    cover:
      process.env.PUBLIC_URL +
      "../hero/2015_lada_raven_supercar_concept-HD.jpg",
  },

  {
    text: <i>Lada-Crossover-Models</i>,
    title: "Bazra Motors",
    cover: process.env.PUBLIC_URL + "../hero/Lada-Crossover-Models.jpg",
  },
  {
    text: "Lada-Niva-Bronto Car",
    title: "Bazra Motors",
    cover: "../hero/Lada-Niva-Bronto-Video-main.jpg",
  },
  {
    text: <i>Lada-x-cross-5</i>,
    title: "Bazra Motors",
    cover: "../hero/lada-x-cross-5-1.jpg",
  },
];

export const about = [
  {
    text: "About us Bazra",
    visionDesc: (
      <p>
        Leading the future through connecting businesses and individuals to vital knowledge technology products is our vision!
      </p>
    ),
    objectiveDesc: (
      <p>
        Working for the safest and most responsible living, working and moving is our objective.
      </p>
    ),
    missionDesc: (
      <p>
        Building transformation of corporate economy of the group is our mission
      </p>
    ),
    goalDesc: (
      <p>
        Our goal is to engaging talent, innovate and serve the highest quality in a better way.     
         </p>
    ),
    cover: "../IMGlogo1.jpg",
    title: "10 + years of exprince in the manifacturing industry",
    moreDesc:
      "We; BAZRA INVESTMENT GROUP (BIG), are a group of companies doing business in areas of trading, Import-Export, construction, investment management, IT, motor engineering and urban development. BIG brings world class advice, know-how, technology and finance to Ethiopia through the use of local talent and via collaboration with international partners.BIG is working in partnership with world-renowned companies to assemble vehicles such as LADA, BAW and BAIC. BIG represent VW/FAW and KAMAZ in Ethiopia; plus, it als represents Belarus Tractors, Kirovets Tractors, VIM Tractors and attachments and KLEVER attachments, this has allowed BAZRA to provide the best automotive and agricultural machinery products and services at the highest standards with international certification making it a world-class company operating in the African continent.",
    bannerDesc:
      "We; BAZRA INVESTMENT GROUP (BIG), are a group of companies doing business in areas of trading, Import-Export, construction, investment management, IT, motor engineering and urban development. BIG brings world class advice, know-how, technology and finance to Ethiopia through the use of local talent and via collaboration with international partners.BIG is working in partnership with world-renowned companies to assemble vehicles such as LADA, BAW and BAIC. BIG represent VW/FAW and KAMAZ in Ethiopia; plus, it als represents Belarus Tractors, Kirovets Tractors, VIM Tractors and attachments and KLEVER attachments, this has allowed BAZRA to provide the best automotive and agricultural machinery products and services at the highest standards with international certification making it a world-class company operating in the African continent.",
  },
];

export const overview = [
  {
    id: 1,
    title: "Exprience",
    Desc: "Ethiopian-owned company with 10+ years of experience in car manufacturing service-oriented company",
    cover: "../icon1.png",
  },
  {
    id: 2,
    icon: <Settings />,
    title: "Founder",
    Desc: "Founded by Dr. Yeyehyirad Asnake Bazra Investment Group, based in Addis Ababa, Ethiopia",
    cover: "../icon2.png",
  },
  {
    id: 3,
    icon: <Settings />,
    title: "Service",
    Desc: "Provide End to End Services to Meet Customer Requirements",
    cover: "../icon3.png",
  },

  {
    id: 4,
    icon: <Settings />,
    title: "Employee",
    Desc: "100+ Employees, Certified and Committed to Best Practices",
    cover: "../icon4.png",
  },
  {
    id: 5,
    icon: <Settings />,
    title: "Revenu",
    Desc: "Annual Revenue of '10M+' many ETB ",
    cover: "../icon5.png",
  },
  {
    id: 6,
    icon: <CropRotate />,
    title: "Leading Player",
    Desc: "A Leading Player Manifacturing,IT Market with Many project completed",
    cover: "../icon6.png",
  },
];

export const service = [
  {
    id: 1,
    icon: <Settings />,
    title: "Manifucturing",
    Desc: "Bazra Investment Group Manifucturing",
    cover: "../bz1.png",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Transport",
    Desc: "Bazra Investment Group Transport",
    cover: "../bz1.png",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Motor Vihecle Part",
    Desc: "Bazra Investment Group  Vihecle Part",
    cover: "../bz1.png",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Import-Export",
    Desc: "Bazra Investment Group  Import-Export",
    cover: "../bz1.png",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Motor Engineering",
    Desc: "Bazra Investment Group  Motor Engineering",
    cover: "../bz1.png",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Agriculture",
    Desc: "Bazra Investment Group Agriculture",
    cover: "../bz1.png",
  },
  {
    id: 7,
    icon: <BarChart />,
    title: "Urban-Development",
    Desc: "Bazra Investment Group UrbanDevelopment",
    cover: "../bz1.png",
  },
  {
    id: 8,
    icon: <BarChart />,
    title: "Logistics",
    Desc: "Bazra Investment Group Logistics",
    cover: "../bz1.png",
  },
];

export const Banservice = [
  {
    id: 1,
    icon: <Settings />,
    title: "",
    Desc: "Bazra Investment Group description in this About us Bazra Investment Group plc",
    cover: "../service12.png",
  },
];

export const counter = [
  {
    id: 0,
    icon: <CloudOutlined />,
    num: 900,
    title: "Happy Client",
    Desc: "Bazra Motors description in this About us Bazra Investment Group plc",
    cover: "../bz1.png",
  },
  {
    id: 1,
    icon: <CropRotate />,
    num: 900,
    title: "Lada Cars",
    Desc: "Bazra Motors description in this About us Bazra Investment Group plc",
    cover: "../bz1.png",
  },
  {
    id: 2,
    icon: <ViewInAr />,
    num: 900,
    title: "Employee",
    Desc: "Bazra Motors description in this About us Bazra Investment Group plc",
    cover: "../bz1.png",
  },
  {
    id: 3,
    icon: <PieChart />,
    num: 100,
    title: "Sister Company",
    Desc: "Bazra Motors description in this About us Bazra Investment Group plc",
    cover: "../bz1.png",
  },
];

export const hero = [
  "../images/list/p-1.png",
  "../images/list/p-2.png",
  {
    Image: "../images/list/p-2.png",
  },
];

export const portfolio = [
  {
    category: "Vesta",
    items: [
      {
        name: "Lada vasta",
        title: "Car Model 2",
        cover: "../portfolio/vesta/techno_672.webp",
      },
      // { name: "Lada-Niva-Bronto-8", title: "Car Mode3 ", cover: "../portfolio/vesta/spec.PNG" },
      {
        name: "Vasta Lada",
        title: "Car Model 4",
        cover: "../portfolio/vesta/techno_221.webp",
      },
      {
        name: "pres-releas",
        title: "Car Model 5",
        cover: "../portfolio/vesta/profile_2.webp",
      },

      // { name: "LADA 4x4", title: "Car Model 1", cover: "../portfolio/vesta/vs_main_header_d.webp" },
      {
        name: "Lada vasta",
        title: "Car Model 2",
        cover: "../portfolio/vesta/techno_691.webp",
      },
      // { name: "Lada-Niva-Bronto-8", title: "Car Mode3 ", cover: "../hero/Lada-Niva-Bronto-8.jpg" },
      {
        name: "Vasta Lada",
        title: "Car Model 4",
        cover: "../portfolio/vesta/techno_221.webp",
      },
      {
        name: "pres-releas",
        title: "Car Model 5",
        cover: "../portfolio/vesta/profile_1.webp",
      },
      // { name: "vaz-black-lada-car", title: "Car Model 6", cover: "../hero/HD-wallpaper-vaz-black-lada-car.jpg" },
    ],
  },
  {
    category: "Granta",
    items: [
      {
        name: "LADA Granta classic",
        title: "Manifa Model",
        cover: "../portfolio/Granta/classic_22_221.webp",
      },
      {
        name: "Granta-lada-car",
        title: "Car Model 6",
        cover: "../portfolio/Granta/club_195.png",
      },
      {
        name: "LADA Granta classic",
        title: "Manifa Model",
        cover: "../portfolio/Granta/classic_22_672.webp",
      },
      {
        name: "LADA Granta classic",
        title: "Manifa Model",
        cover: "../portfolio/Granta/luxe_691.png",
      },
      {
        name: "LADA Granta classic",
        title: "Manifa Model",
        cover: "../portfolio/Granta/luxe_691.png",
      },
    ],
  },
  {
    category: "Lada4X4",
    items: [
      { name: "LADA 4x4", title: "Car Model 1", cover: "../portfolio/4x4.png" },
    ],
  },
  // Add more portfolio items as needed
];

export const contact = [
  {
    icon: (
      <i>
        <AddLocationAltOutlined />
        <a title="map"
          href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </i>
    ),
    text: (
      <i>
        <a
          href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Friendship Building, Africa Avenue
        </a>
      </i>
    ),
  },
  {
    icon: (
      <a>
        <MdLocalPhone />
        <a title="phone"
          href="https://wa.me/251985187059?"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </a>
    ),
    text: (
      <a>
        <a
          href="https://wa.me/251985187059?"
          target="_blank"
          rel="noopener noreferrer"
        >
          + 251 116151212
        </a>
      </a>
    ),
  },
  {
    icon: (
      <a>
        <MdEmail />
        <a title="mail"
          href="mailto:bazrainvestmentgroup@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </a>
    ),
    text: (
      <a href="mailto:bazrainvestmentgroup@gmail.com/" target="_blank" rel="noreferrer" className="whitespace-normal overflow-ellipsis">
        bazrainvestmentgroup@gmail.com
      </a>

    ),
  },
];

export const bancontact = [
  {
    icon: <AddLocationAltOutlined />,
    text: " addis ababa frindship buliding ",
    cover: "../contactBACK.png",
  },
];

const defaultDescription =
  "Navigating the Business Landscape Strategies for Success Explore the dynamic world of business with Bazra's latest blog post. Gain insights into effective strategies, industry trends, and success stories that inspire and empower entrepreneurs Innovation Unleashed: The Heartbeat of Bazra At the core of Bazra's identity lies innovation. Dive into our exploration of cutting-edge technologies, groundbreaking solutions, and the creative minds behind our most innovative projects.Employee Spotlight: Faces Behind Bazra's Success Meet the exceptional individuals contributing to Bazra's success. Our Employee Spotlight series highlights the talented and dedicated professionals making Bazra a vibrant and collaborative workplace.Sustainable Practices: Building a Better Tomorrow Sustainability is not just a buzzword at Bazra; it's a commitment. Explore our sustainable practices and initiatives aimed at making a positive impact on the environment and future generations.";

export const postData = [
  {
    id: 1,
    img: "../../../lada.jpeg",
    ttl: "TITLE 1",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 2,
    img: "../../../lada0.jpeg",
    ttl: "TITLE 2",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 3,
    ttl: "TITLE 3",
    mln: 13,
    dsc: defaultDescription,
  },
  {
    id: 4,
    img: "../../../lada1.jpeg",
    ttl: "TITLE 4",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 5,
    img: "../../../lada2.jpeg",
    ttl: "TITLE 5",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 6,
    img: "../../../lada3.jpeg",
    ttl: "TITLE 6",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 7,
    img: "../../../lada.jpeg",
    ttl: "TITLE 7",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 8,
    ttl: "TITLE",
    mln: 13,
    dsc: defaultDescription,
  },
  {
    id: 9,
    img: "../../../lada.jpeg",
    ttl: "TITLE 8",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    id: 10,
    img: "../../../lada.jpeg",
    ttl: "TITLE 9",
    dsc: defaultDescription,
    mln: 3,
  },
  {
    mln: 13,
    dsc: defaultDescription,
  },
];

export const list = [
  {
    id: 1,
    cover: "../lada.JPEG",
    name: "LADA 4x4",
    location: "Adiss Ababa",
    category: "For Rent",
    price: "Birr 3,700",
    type: "",
  },
  {
    id: 2,
    cover: "../lada.JPEG",
    name: "Lada Vesta",
    location: "Addiss ababa",
    category: "For Sale",
    price: "Birr 9,750",
    type: "",
  },
  {
    id: 3,
    cover: "../lada.JPEG",
    name: "car",
    location: "Addis Ababa",
    category: "For Rent",
    price: "Birr 5,860",
    type: "logistics",
  },
  {
    id: 4,
    cover: "../lada.JPEG",
    name: "Lada Vesta",
    location: "Addiss ababa",
    category: "For Sale",
    price: "Birr 9,750",
    type: "",
  },
];

export const footer = [
  {
    title: "",
    text: [
      {
        list: (
          <Link to="/">
            <a href="/">
              <b>Home</b>
            </a>
          </Link>
        ),
      },
      {
        list: (
          <Link to="/services">
            {" "}
            <a href="/services">
              <b>Service</b>
            </a>
          </Link>
        ),
      },
      {
        list: (
          <Link to="/about">
            {" "}
            <a href="/about">
              <b>About Us</b>
            </a>
          </Link>
        ),
      },
      {
        list: (
          <Link to="/blog">
            <a href="/blog">
              <b>Blogs</b>
            </a>
          </Link>
        ),
      },
      {
        list: (
          <Link to="/contactpage">
            <a href="/contactpage">
              <b>Contacts</b>
            </a>
          </Link>
        ),
      },
    ],
  },

  {

    title: "Social",
    text: [
      {
        list: (

          <a>
            <i>
              <EmailOutlined />
            </i>{" "}
            <a href="mailto:bazrainvestmentgroup@gmail.com/" target="_blank" rel="noreferrer">
              {" "}
              Email
            </a>{" "}
          </a>
        ),
      },
      {
        list: (
          <a>
            <i>
              <Facebook />
            </i>{" "}
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>{" "}
          </a>
        ),
      },
      {
        list: (
          <a>
            <i>
              <FontAwesomeIcon icon={faXTwitter} />
            </i>{" "}
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              {" "}
              Twitter
            </a>{" "}
          </a>
        ),
      },
      {
        list: (
          <a>
            <i>
              <Instagram />
            </i>{" "}
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>{" "}
          </a>
        ),
      },
      {
        list: (
          <a>
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>{" "}
            <a
              href="https://www.linkedin.com/in/"
              target="_blank" rel="noreferrer"
            >
              Linkdin
            </a>{" "}
          </a>
        ),
      },
    ],
  },
  {
    title: "Location",
    text: [
      {
        list: (
          <a
            href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <i>
                <AddLocationAltOutlined />{" "}
              </i>
              Location
            </b>{" "}
            Friendship Building, Africa Avenue
          </a>
        ),
      },
      {
        list: (
          <a>
            <b>
              <i>
                <Public />
              </i>
              Office No: {""}
            </b>{" "}
            506, Fifth Floor,
          </a>
        ),
      },
      {
        list: (
          <a>
            <b>
              <i>
                <Public />
              </i>
              House No:</b> {"5597/506, Worda 2, Sub-City Bole"}

          </a>
        ),
      },
    ],
  },
  {
    title: "Call Us",
    text: [
      {
        list: (
          <a>
            {" "}
            <i>
              <PhoneIphone />
            </i>
            <b>Mob: </b>  + 251 911239976/+ 251 911762127
          </a>
        ),
      },
      {
        list: (
          <a>
            <b>
              <i>
                <PhoneIphone />
              </i>
              Tel:
            </b>
            + 251 116151212
          </a>
        ),
      },
      {
        list: (
          <a>
            <b>
              <i>
                <PhoneIphone />
              </i>
              Fax:
            </b>
            +251 116151221
          </a>
        ),
      },
    ],
  },
];


export const testimonials = [
  {
    prof: "Founder",
    cover: "../testimoni.png",
    text: "good for all in bazra",
    // address: "Addis Ababa",
    name: "Dr. Yayehyirad Asnake,",
    icon: [
      <a
        href="mailto:bazrainvestmentgroup@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-google"></i>
      </a>,
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    prof: "Finance Manager",
    cover: "../testimoni.png",
    text: "good for all in bazra",
    name: "Mr. Getu B. ",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    prof: "Client",
    cover: "../testimoni.png",
    text: "good for all in bazra",
    name: "Mr/DR/Ms",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  // {
  //   prof: "Softwar Engineer",
  //   text: "contact bazra and good for all in bazra",
  //   cover: "../testimoni.png",
  //   // address: "Addis Ababa",
  //   name: "Dagmawi",
  //   icon: [
  //     <i class="fa-brands fa-facebook-f"></i>,
  //     <i class="fa-brands fa-linkedin"></i>,
  //     <i class="fa-brands fa-twitter"></i>,
  //     <i class="fa-brands fa-instagram"></i>,
  //   ],
  // },
  {
    prof: "Founder",
    cover: "../testimoni.png",
    text: "good for all in bazra",
    name: "Dr. Yayehyirad Asnake,",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    prof: "Manager",
    cover: "../testimoni.png",
    text: "good for all in bazra",
    name: "Mr. Lealem. S",

    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];

export const blog = [
  {
    title: "For New Car",
    cover: "../lada.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "Dr. Yayehyirad Asnake",
    date: <i> Date :2016:03:03</i>,
    icon: [
      <a
        href="mailto:bazrainvestmentgroup@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-google"></i>
      </a>,
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    title: "For New Car",
    cover: "../lada0.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "lealem",
    date: "10",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    title: "For New Car",
    cover: "../lada1.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailersAddis Ababa, Ethiopia",
    author: "Dr. Yayehyirad Asnake",
    date: "10",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    title: "For New Car",
    cover: "../lada2.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "Dr. Yayehyirad Asnake",
    date: "10",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    title: "For New Car",
    cover: "../lada2.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailers Addis Ababa, Ethiopia",
    author: "Dr. Yayehyirad Asnake",
    date: "10",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    title: "For New Car",
    cover: "../lada1.JPEG",
    Desc: "Manufacturing of motor vehicles, accessories, spare parts and trailersAddis Ababa, Ethiopia",
    author: "Fuad",
    date: "10",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];

export const serviceData = [
  {
    id: 1,
    icon: <Settings />,

    title: "Manifucturing",
    imageUrl: "../../../manif.jpg",
    description:
      "BAZRA has a motor engineering company dedicated to automotive assembly and manufacturing.  ",
    websiteLink: "/contactpage",
  },
  {
    id: 2,
    icon: <Settings />,

    title: "Transport",
    imageUrl: "../../../serviceD/transprt.webp",
    description:
      "BAZRA has initiated a surface transport company to ease the freight challenges of the nation. Meanwhile; we can provide inter-modal transportation services on rail, by air and sea keeping businesses to connect with international markets We are also an official customs agent who can provide customs clearance in Ethiopia.",
    websiteLink: "/contactpage",
  },
  {
    id: 3,
    icon: <Settings />,

    title: "Motor vihecle Part ",
    imageUrl: "../../../serviceD/vichle part.jpg",

    description:
      "BAZRA provides spare parts for the vehicles it assembles and represents.",
    websiteLink: "/contactpage",
  },
  {
    id: 4,
    icon: <Settings />,

    title: "Import-Export",
    imageUrl: "../../../serviceD/import-and-export.jpg",

    description:
      "We; BAZRA, are a boutique business, trading, products sourcing, Import-Export company. BAZRA plays in commodities of all kind that are os crucial role in the development of economy. BAZRA is there in sourcing all kind of commodities from both Ethiopia to the world and from the any point in the glob to any other destination.  ",
    websiteLink: "/contactpage",
  },
  {
    id: 5,
    icon: <Settings />,

    title: "Motor Engineering",
    imageUrl: "../../../serviceD/Motor Engineering.jpg",

    description:
      "BAZRA is one of Automotive Distributors and Manufacturers in Ethiopia, covering passenger cars and medium duty commercial vehicles and agricultural machineries. BAZRA MOTORS has an assembly facility in Kombolcha, 300kms away from Addis Ababa agreed to assemble LADA vehicles.",
    websiteLink: "/contactpage",
  },
  {
    id: 6,
    icon: <Settings />,

    title: "Agriculture",
    imageUrl: "../../../serviceD/Agriculture.jpg",

    description:
      "BAZRA represent quite very bigger names in the world agricultural machinery and technology such as Belarus Tractors, Kirovets Tractors, VIM Tractors and implements, KLEVER implements and GEOMIR (AgroHistory) agricultural IT systems.",
    websiteLink: "/contactpage",
  },
  {
    id: 7,
    icon: <Settings />,

    title: "Urban-Development",
    imageUrl: "../../../serviceD/urban.png",

    description:
      "BAZRA has an urban development wing working to develop cities in Ethiopia with the main focus in Arba-Minch, Bahir-Dar, Debre-Birhan, Dessie and Gonder. The urban development concepts are multiplied with the concepts of eco-SMART and TECHNOPOLIS concepts.",
    websiteLink: "/contactpage",
  },
  {
    id: 8,
    icon: <Settings />,

    title: "Logistics",
    imageUrl: "../../../serviceD/logistics.jpg",

    description:
      "BAZRA has developed a Logistics and Transport platform which is completely automated system that outperforms the industry's conventional management systems and enables businesses and truck owners to take full control of their assets, cargo and engage actively in the business. The platform provides market, tracing and tracking tools, transport administration and management.",
    websiteLink: "/contactpage",
  },
];

export const Map = [
  {
    text: [
      {
        list: (
          <a>
            <a
              href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>
                <i>
                  <AddLocationAltOutlined />{" "}
                </i>
                Location
              </b>{" "}
              Friendship Business Center, Airport Rd, Ethiopia
            </a>
          </a>
        ),
      },
    ],
  },
];

export const products = [
  {
    title: "IT",
    link: "/products/aggregates",
    image: "../../../IT.png",
    description:
      "BAZRA’s IT wing is working both on its own capacity and with partners in the world of IT BAZRA is partnering with such big names in the industry as ALT4, FORTECOM, KASPERSKY, SAP LEONARDO, GEOMIR, MPP LABS, SOFTLINE and SOFTCLUB.  BAZRA has developed its own logistics management and payment platforms.",
  },
  {
    title: "Manufacturing",
    link: "/products/aggregates",
    image: "../../../manif.jpg",
    description:
      "BAZRA has a motor engineering company dedicated to automotive assembly and manufacturing.",
  },
  {
    title: "Motor Engineering",
    link: "/products/aggregates",
    image: "../../../lada3.jpeg",
    description:
      "BAZRA is one of Automotive Distributors and Manufacturers in Ethiopia, covering passenger cars and medium duty commercial vehicles and agricultural machineries. BAZRA MOTORS has an assembly facility in Kombolcha, 300kms away from Addis Ababa agreed to assemble LADA vehicles.",
  },
  {
    title: "Construction",
    link: "/products/aggregates",
    image: "../../../lada.jpeg",

    description:
      "BAZRA has a construction wing working in the steadily expanding construction sector; which is a grade I building company that works hard to advance the civil construction industry.",
  },
  {
    title: "Urban Development ",
    link: "/products/aggregates",
    image: "../../../lada0.jpeg",

    description:
      "BAZRA has an urban development wing working to develop cities in Ethiopia with the main focus in Arba-Minch, Bahir-Dar, Debre-Birhan, Dessie and Gonder. The urban development concepts are multiplied with the concepts of eco-SMART and TECHNOPOLIS concepts.",
  },


  // Add more product objects similarly
];

export const images = [
  { src: '../../../gallary/2015_lada_raven_supercar_concept-HD.jpg', name: 'lada', role: 'demicar' },
  { src: '../../../gallary/vesta3.jpg', name: 'lada', role: 'vesta' },
  { src: '../../../gallary/main_desktop.webp', name: 'lada', role: 'niva' },
  { src: '../../../gallary/6867247746a5b4ec0c5ec3994a1dc153.jpg', name: 'lada', role: 'Demicar' },
  { src: '../../../gallary/gs_dt.webp', name: 'lada', role: 'granta' },
  { src: '../../../gallary/Lada_Vision014.jpg', name: 'lada', role: '4x4' },
  { src: '../../../gallary/lada-vesta-sw-cross-2023-2024-1692357645.7809312.jpg', name: 'lada', role: 'vesta' },
  { src: '../../../gallary/vs_main_header_d.webp', name: 'lada', role: 'Vesta' },
  { src: '../../../gallary/vaz_catalogue_notes-file_-115365-840.jpg', name: 'lada', role: '4x4' },

  { src: '../../../gallary/classic_22_672.webp', name: 'lada', role: 'granta' },

];

export const partner = [

  {
    category: "Automotive and Agricultural ",
    images: "../partnership/university.png",
    partners: [
      {
        "image_src": "../partnership/autoagri/avtovaz.JPG"
      },
      {
        "image_src": "../partnership/autoagri/baic.png"
      },
      {
        "image_src": "../partnership/autoagri/baw.png"
      },
      {
        "image_src": "../partnership/autoagri/belarus.png"
      },
      {
        "image_src": "../partnership/autoagri/faw.png"
      },
      {
        "image_src": "../partnership/autoagri/kamaz.png"
      },
      {
        "image_src": "../partnership/autoagri/kirovets.png"
      },
      {
        "image_src": "../partnership/autoagri/klever.png"
      },
      {
        "image_src": "../partnership/autoagri/uaz.png"
      },
     

    ]
  },
  {
    category: "Chemicals and Fertilizers",
    images: "../partnership/university.png",
    partners: [
      {
        "image_src": "../partnership/chemica&feltrizer/keystone.png"
      },
      {
        "image_src": "../partnership/chemica&feltrizer/tralexcargo.png"
      },
      {
        "image_src": "../partnership/chemica&feltrizer/vim.png"
      },
      

    ]
  }
  ,
  {
    category: "Financial Sectors",
    images: "../partnership/financelogo.png",
    partners: [
      {
        "image_src": "../partnership/finance/brics.jpg"
      },
      {
        "image_src": "../partnership/finance/ebcc.jpg"
      },
      {
        "image_src": "../partnership/finance/komutet.png"
      },
      

    ]
  },
  {
    category: "Technology (IT)",
    images: "../partnership/financelogo.png",
    partners: [
      {
        "image_src": "../partnership/IT/fortecom.png",
        description:" description"
      },
      {
        "image_src": "../partnership/IT/kaspersky.png"
      },
      {
        "image_src": "../partnership/IT/softclub.png"
      },
      {
        "image_src": "../partnership/IT/mpplabs.jpg"
      },
      {
        "image_src": "../partnership/IT/sap.jpg"
      },
      {
        "image_src": "../partnership/IT/softline.png"
      },
      {
        "image_src": "../partnership/IT/gs.png"
      },
      

    ]
  },
]