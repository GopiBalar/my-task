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
import SerchAutoComplete from "./components/serch-autoComplete-with-api/SerchAutoComplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlag from "./components/feature-flag/FeatureFlag";
import FeatureFlagGlobalStateContext from "./components/feature-flag/context/FeatureFlagContext";
import UseFetchCustomHookTest from "./components/useFetch-Custom-Hook/UseFetchCustomHookTest";
import UseOnClickOutSideTest from "./components/use-Outside-Click/UseOnClickOutSideTest";
import UseWindowResize from "./components/use-Window-Resize/UseWindowResize";
import ScrollToTopBottom from "./components/scroll-To-Top&Bottom/ScrollToTop&Bottom";

function App() {
  return (
    <div className="App">
      {/* --------- 1 --------------*/}
      {/* <Accordian /> */}

      {/* --------- 2 --------------*/}
      {/* <h1>Star Rating</h1>
      <StarRating /> */}

      {/* --------- 3 --------------*/}
      {/* <h1>Random Colors</h1>
      <RandomColors /> */}

      {/* --------- 4 --------------*/}
      {/* <h1>Image Slider</h1>
      <ImageSlider
        url={`https://picsum.photos/v2/list`}
        limit={`10`}
        page={`3`}
      /> */}

      {/* --------- 5 --------------*/}
      {/* <h1>Load More Data</h1>
      <LoadMoreData /> */}

      {/* --------- 6 --------------*/}
      {/* <h1>Tree View</h1> */}
      {/* <TreeView /> */}

      {/* --------- 7 --------------*/}
      {/* <h1>QR Code Generator</h1>
      <QrCodeGenerator /> */}

      {/* --------- 8 -------------*/}
      {/* <h1>Light Dark Mode</h1>
      <LightDarkMode /> */}

      {/* --------- 9 --------------*/}
      {/* <h1>Scroll Indicator</h1>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* --------- 10 --------------*/}
      {/* <h1>Custom Tabs</h1>
      <CustomTab /> */}

      {/* --------- 11 --------------*/}
      {/* <h1>Custom Modal Popup</h1>
      <CustomModalPopup /> */}

      {/* --------- 12 --------------*/}
      {/* <h1>Github Profile Finder</h1> */}
      {/* <GithubProfileFinder /> */}

      {/* --------- 13 --------------*/}
      {/* <h1>Serch Auto Complete API</h1> */}
      {/* <SerchAutoComplete /> */}

      {/* --------- 14 --------------*/}
      {/* <h1>Tic Tac Toe</h1> */}
      {/* <TicTacToe /> */}

      {/* --------- 15 --------------*/}
      {/* <h1>Feature Flag</h1> */}
      {/* <FeatureFlagGlobalStateContext>
        <FeatureFlag />
      </FeatureFlagGlobalStateContext> */}

      {/* --------- 16 --------------*/}
      {/* <h1>useFetch custom Hook</h1> */}
      {/* <UseFetchCustomHookTest /> */}

      {/* --------- 17 --------------*/}
      {/* <UseOnClickOutSideTest /> */}

      {/* --------- 18 --------------*/}
      {/* <UseWindowResize /> */}

      {/* --------- 19 --------------*/}
      <ScrollToTopBottom />
    </div>
  );
}

export default App;
