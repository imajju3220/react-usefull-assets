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
import QRCodeGenerator from "./components/qrCodeGenerator";
import LightDarkMod from "./components/lightDarkMode";
import ScrollIndicator from "./components/scrollIndicator";
function App() {
  return (
    <div className="App">
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      {/* <LightDarkMod/> */}
      {/* <QRCodeGenerator/> */}
      {/* <TreeView menus={menus} /> */}
      {/* <LoadMoreData />  */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <RandomColor /> */}
      {/* <AccordionMultiSelect /> */}
      {/* <AccordionSingleSelect /> */}
    </div>
  );
}

export default App;
