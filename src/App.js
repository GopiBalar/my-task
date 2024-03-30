import "./App.css";
import Accordian from "./components/accordian/Accordian";
import StarRating from "./components/starRating/StarRating";
import RandomColors from "./components/randomColors/RandomColors";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeView from "./components/tree-view/TreeView";
import QrCodeGenerator from "./components/qr-code-generator/QrCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import CustomTab from "./components/custom-tab/CustomTab";
import CustomModalPopup from "./components/custom-modal-popup/CustomModalPopup";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <h1>Star Rating</h1>
      <StarRating /> */}

      {/* <h1>Random Colors</h1>
      <RandomColors /> */}

      {/* <h1>Image Slider</h1>
      <ImageSlider
        url={`https://picsum.photos/v2/list`}
        limit={`10`}
        page={`3`}
      /> */}

      {/* <h1>Load More Data</h1>
      <LoadMoreData /> */}

      {/* <h1>Tree View</h1> */}
      {/* <TreeView /> */}

      {/* <h1>QR Code Generator</h1>
      <QrCodeGenerator /> */}

      {/* <h1>Light Dark Mode</h1>
      <LightDarkMode /> */}

      {/* <h1>Scroll Indicator</h1>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* <h1>Custom Tabs</h1> */}
      {/* <CustomTab /> */}

      {/* <h1>Custom Modal Popup</h1> */}
      {/* <CustomModalPopup /> */}

      {/* <h1>Github Profile Finder</h1> */}
      <GithubProfileFinder />
    </div>
  );
}

export default App;
