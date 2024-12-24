import Header from './components/tutorial_components/header.jsx';
import Footer from './components/tutorial_components/footer.jsx';
import Card from './components/tutorial_components/cards.jsx';
import ButtonTutorialEvent from './components/tutorial_components/buttonTutorialEvent.jsx';
import ProfilePicture from './components/tutorial_components/ProfilePicture.jsx';
import UseStateIntro from './components/tutorial_components/useState-intro.jsx';
import Counter from './components/tutorial_components/Counter.jsx';
import onChangeIntro from "./components/tutorial_components/onChange-intro";
import OnChangeIntro from "./components/tutorial_components/onChange-intro";
import ColorPicker from "./components/tutorial_components/ColorPicker";
import UpdaterIntro from "./components/tutorial_components/updater-intro";
import UpdateObjects_stateIntro from "./components/tutorial_components/updateObjects_state-intro";
import UpdateArrays_stateIntro from "./components/tutorial_components/updateArrays_state-intro";
import UpdateArrayObjects_stateIntro from "./components/tutorial_components/updateArrayObjects_state-intro";
import ToDoListApp from "./components/tutorial_components/ToDoListApp";
import UseEffectIntro from "./components/tutorial_components/useEffect-intro";
import WidthHeightUseEffect from "./components/tutorial_components/browser-width_height_useEffect.jsx";
import DigitalClockApp from "./components/tutorial_components/DigitalClockApp";

//import Background from "../src/components/background.jsx";


function App() {

    return (
    <div>
        <Header />
        <Card />
        <Footer />
        <ButtonTutorialEvent />
        <ProfilePicture />
        <UseStateIntro />
        <Counter />
        <OnChangeIntro />
        <ColorPicker />
        <UpdaterIntro />
        <UpdateObjects_stateIntro />
        <UpdateArrays_stateIntro />
        <UpdateArrayObjects_stateIntro />
        <ToDoListApp />
        <UseEffectIntro />
        <WidthHeightUseEffect />
        <DigitalClockApp/>



    </div>


  );
}

export default App;

// font is set to Electronic Arts because colorPicker.scss is getting the font to
// put in the body