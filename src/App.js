/** @format */

import logo from "./logo.svg";
import "./App.css";
import AccordionSingleSelect from "./components/accordionSingleSelect";
import AccordionMultiSelect from "./components/accordianMultiSelect";
import RandomColor from "./components/randomColor";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
      <StarRating noOfStars={10} />
      <RandomColor />
      <AccordionMultiSelect />
      <AccordionSingleSelect />
    </div>
  );
}

export default App;
