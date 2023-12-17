import Header from "./components/Header";
import Card from "./components/Card";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  let details = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.`;
  return (
    <>
      <Header
        company_name={"Company Name"}
        tag_line={"We specialise in something ..."}
      />

      <Card
        heading={"About the Company"}
        details={details}
        className="section"
      />
      <Card
        heading={"Our Values"}
        details={details}
        className="section bg-grey"
      />
      <Card heading={"Our Mission"} details={details} className="section" />

      <ContactUs
        intro={"Contact us and we will get back to you within 24 hours."}
        intro2={"Test Name"}
        no={"+91 01234 xxxxx"}
        email={"testCompany@testCompany.com"}
        btnName={"Send"}
      />
    </>
  );
}

export default App;
