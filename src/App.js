/** @format */

import logo from "./logo.svg";
import "./App.css";
import AccordionSingleSelect from "./components/accordionSingleSelect";
import AccordionMultiSelect from "./components/accordianMultiSelect";
import RandomColor from "./components/randomColor";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import LoadMoreData from "./components/loadMoreData";
import TreeView from "./components/treeView";
import menus from "./components/treeView/data";
function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
      {/* <LoadMoreData /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
      <StarRating noOfStars={10} />
      <RandomColor />
      <AccordionMultiSelect />
      <AccordionSingleSelect /> */}
    </div>
  );
}

export default App;
