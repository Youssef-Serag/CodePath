import "./App.css";
import Card from "./components/Card";
import mexican from "./images/mexican.jpg";
import poke from "./images/poke.png";
import olive from "./images/italian.jpg";
import chicken from "./images/fried_chicken.jpg";
import middle_eastern from "./images/middle_eastern.jpg";
import brisket from "./images/brisket.jpg";
import breakfast from "./images/breakfast.jpg";
import pho from "./images/pho.jpg";
import acai from "./images/acai.jpg";
import cookies from "./images/cookies.jpg";
import banner from "./images/awning.png";

function App() {
  return (
    <div className="App">
      <h1 className="title">Favorite Restaurants</h1>
      <div className="container">
        <Card
          path={mexican}
          name="Los Pollos Hermanos"
          cuisine="Mexican"
          link="https://www.chipotle.com/"
        />
        <Card
          path={poke}
          name="Poke2U"
          cuisine="Hawaiin"
          link="https://www.poke2u.com/"
        />
        <Card
          path={olive}
          name="Olive Garden"
          cuisine="Italian"
          link="https://www.olivegarden.com/home"
        />
        <Card
          path={chicken}
          name="Dave's Hot Chicken"
          cuisine="Nashville Fried Chicken"
          link="https://www.daveshotchicken.com/"
        />
        <Card
          path={middle_eastern}
          name="Green Corner"
          cuisine="Middle Eastern"
          link="https://greencorneraz.com/"
        />
        <Card
          path={brisket}
          name="Texas Brisket"
          cuisine="Texas BBQ"
          link="https://littlemissbbq.com/"
        />
        <Card
          path={breakfast}
          name="First Watch Breakfast"
          cuisine="American Breakfast"
          link="https://www.firstwatch.com/"
        />
        <Card
          path={pho}
          name="Pho Valley"
          cuisine="Viatnemese"
          link="https://phofreshalleyandbobatea.com/"
        />
        <Card
          path={acai}
          name="Berry Divine Acai"
          cuisine="Tropical"
          link="https://berrydivineacai.com/"
        />
        <Card
          path={cookies}
          name="Crumbl Cookies"
          cuisine="Dessert"
          link="https://crumblcookies.com/"
        />
      </div>
    </div>
  );
}

export default App;
