import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

// Functions
const getIcon = (n) => `/${n.toLowerCase()}.svg`;

function evalRoute(str) {
  switch (str.split("/")[1]) {
    case "Blogs":
      return "/Blog";
    case "CodeGround":
      return "/CodePlayGround";
    default:
      return str;
  }
}

function setSize(size) {
  switch (size) {
    case "sm":
      return "is-small";
    case "sb":
      return "is-large";
    case "ism":
      return "is-medium";
    case "sh":
      return "is-halfheight";
  }
}

function setColor(val) {
  switch (val) {
    case "sl":
      return "is-success is-light";
    case "s":
      return "is-success";
    case "i":
      return "is-info";
    case "il":
      return "is-info is-light";
    case "l":
      return "is-link";
    case "ll":
      return "is-link is-light";
    case "p":
      return "is-primary";
    case "pl":
      return "is-primary is-light";
    case "w":
      return "is-warning";
    case "wl":
      return "is-warning is-light";
    case "d":
      return "is-danger";
    case "dl":
      return "is-danger is-light";
  }
}

// Components
function DropDownOpts({ opts = [] }) {
  return opts.map(({ name, route }, i) => (
    <Link key={i} href={route}>
      <a className="navbar-item">
        {name}
        <span className="dropDownLogo">
          <Image
            className="dropDownLogo"
            src={getIcon(name.split(" ")[0])}
            width="30"
            height="30"
            alt={name}
          />
        </span>
      </a>
    </Link>
  ));
}

function NavbarOptions({ opts = [] }) {
  opts = opts.filter(({ showable }) => showable === true);
  const rou = useRouter();
  return opts.map(({ name, route }, i) => {
    return (
      <Link href={route} key={i}>
        <a
          className={`navbar-item ${
            route ===
            (rou.pathname.split("/").length >= 3
              ? "/" + rou.pathname.split("/")[1]
              : rou.pathname)
              ? "is-active"
              : ""
          }`}
        >{`${name}`}</a>
      </Link>
    );
  });
}

function Carousel({ options = [0, 1, 2] }) {
  let [actSlide, setActSlide] = useState(options[0]);
  let moveFoward = () =>
    setActSlide(
      actSlide >= options.length
        ? actSlide - (options.length - 1)
        : actSlide + 1
    );
  let moveBackwards = () =>
    setActSlide(actSlide === 0 ? options.length - 1 : actSlide - 1);
  return (
    <>
      {options.map((x) => (
        <div
          className={`${actSlide === x ? "active" : "hidden"}_carousel fade`}
          key={x}
        >
          <Image
            src={`/temp/${x}.jpg`}
            alt={`${x}`}
            width="1280"
            height="620"
          />
        </div>
      ))}
      <a className="next" onClick={moveFoward}>
        {">"}
      </a>
      <a className="prev" onClick={moveBackwards}>
        {"<"}
      </a>
    </>
  );
}

function HeroCarousel({ options = [1, 2, 3] }) {
  let [actSlide, setActSlide] = useState(1);
  let moveFoward = () =>
    setActSlide(
      actSlide >= options.length
        ? actSlide - (options.length - 1)
        : actSlide + 1
    );
  let moveBackwards = () =>
    setActSlide(actSlide === 0 ? actSlide + 1 : actSlide - 1);

  console.log(actSlide, actSlide === 0);
  console.log(options[actSlide], `el largo es : ${options.length} y `);

  return (
    <>
      {options.map((x) => (
        <div
          className={`${actSlide === x ? "active" : "hidden"}_carousel fade`}
          key={x}
        >
          <div className="hero-body">
            <p className="title">{`Primary ${x}`}</p>
            <p className="subtitle">Primary subtitle</p>
          </div>
        </div>
      ))}
      <a className="next" onClick={moveFoward}>
        {">"}
      </a>
      <a className="prev" onClick={moveBackwards}>
        {"<"}
      </a>
    </>
  );
}

function AppBar() {
  // Constants
  let _basicLeftOptions = [
    // UnUsed
    { name: "Home", route: "/Home", showable: false },
    { name: "Details", route: "/Details", showable: false },
    { name: "PlayGround", route: "/CodePlayGround", showable: false },

    { name: "About", route: "/About", showable: true },
    { name: "Contact", route: "/Contact", showable: true },
    { name: "Blog", route: "/Blog", showable: true },
    { name: "Projects", route: "/Projects", showable: true },
  ];

  let _dropdownOptions = [
    { name: "Java Projects", route: "/Projects#java" },
    { name: "Node Projects", route: "/Projects#nodejs" },
    { name: "Deno Projects", route: "/Projects#denojs" },
    { name: "Rust Projects", route: "/Projects#rust" },
  ];

  // Hookified - Variables
  // const mquery = useMediaQuery();
  const [mobileDropdownActive, setMobileDropdownActive] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  // Functions in-component
  function setDarkmode() {
    setIsDarkModeActive(!isDarkModeActive);
  }

  // Router Next Hook
  const rout = useRouter();

  const selected = _basicLeftOptions.filter(
    ({ route }) => evalRoute(rout.pathname) === route
  )[0].name;

  return (
    <>
      <Head>
        <title>NobuCoder | {selected} </title>
      </Head>

      <nav className="navbar is-black">
        <div className="navbar-brand">
          {/* Brand */}
          <Link href="/Home">
            <a
              className={`navbar-item ${
                rout.pathname === "/Home" ? "is-active" : ""
              }`}
            >
              Nobu_Coder!
            </a>
          </Link>

          {/* Hamburguer */}
          <div
            className={`navbar-burger ${mobileDropdownActive && "is-active"}`}
            data-target="navbar"
            onClick={() => setMobileDropdownActive(!mobileDropdownActive)}
          >
            <span /> <span /> <span />
          </div>
        </div>

        <div
          id="navbar"
          className={`navbar-menu ${mobileDropdownActive && "is-active"}`}
        >
          {/* Navbar Start */}
          <div className="navbar-start">
            <NavbarOptions opts={_basicLeftOptions} />

            {/* DropDown */}
            {/* <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="/Projects">
                            <a className={`navbar-link ${rout.pathname === "/Projects" ? "is-active" : ''}`}> Projects </a>
                        </Link>

                        <div className="navbar-dropdown is-boxed">
                            <DropDownOpts opts={_dropdownOptions}/>
                        </div>
                    </div> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <button className={`button is-rounded`} onClick={setDarkmode}>
                    <span className="icon">
                      {isDarkModeActive ? (
                        <i className="fas fa-cloud-sun" />
                      ) : (
                        <i className="fas fa-sun" />
                      )}
                    </span>
                  </button>
                </p>

                <p className="control">
                  <Link href="/Details">
                    <a
                      className={`button ${
                        rout.pathname === "/Details" ? "is-success" : "is-white"
                      }`}
                    >
                      <span className="icon">
                        <i className="far fa-user" />
                      </span>
                      <span> Click Me for Details </span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function Hero({
  color = "primary",
  title = "Set Title",
  description = "set Description",
  size = "sm",
  foot,
}) {
  return (
    <>
      <section className={`hero is-${color} ${setSize(size)}`}>
        <div className="hero-body">
          <div>
            <p className="title">{title}</p>
            <p className="subtitle">{description}</p>
          </div>
        </div>
        {foot !== undefined ? foot : null}
      </section>
    </>
  );

  // https://bulma.io/documentation/layout/hero/
  // https://bulma.io/documentation/components/card/
  // https://bulma.io/documentation/form/general/
}

function AsidedLeftMenu() {
  return <aside className="bd-docs-nav " style={{ float: "left" }}></aside>;
}

function Modal({ is_active }) {
  return (
    <div className={`modal ${is_active ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <input className="text" />
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export {
  AppBar,
  AsidedLeftMenu,
  Hero,
  Carousel,
  HeroCarousel,
  setColor,
  Modal,
};
