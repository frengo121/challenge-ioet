import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Description from "./components/Description";
import Exercise from "./components/Exercise";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Challenge IOET</title>
        <meta
          name="description"
          content="This project is about a Challenge for the IOET company about the ACME exercise."
        />
        <meta name="theme-color" content="#282c34" />
      </Helmet>
      <Header />
      <Description />
      <Exercise />
    </>
  );
};

export default App;
