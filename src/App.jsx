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
import ComponentA from "./components/tutorial_components/useContext-intro/ComponentA.jsx";
import UseRefIntro from "./components/tutorial_components/useRef-intro.jsx";
import Stopwatch from "./components/tutorial_components/Stopwatch.jsx";
import BlogApp from "../src/components/BlogApp/BlogApp"

//import Background from "../src/components/background.jsx";


function App() {

    return (
    <div>
        <BlogApp/>

    </div>


  );
}

export default App;

// IMPORTANT NOTES:

// To use React Router, you need to install it first:
// npm install react-router-dom

// STEPS IN USING REACT ROUTER IN V6:
// 1. Import BrowserRouter as Router, Route, Routes from 'react-router-dom'
// 2. Wrap your components inside the Router component
// 3. Use Routes component to define your routes
// 4. Use Route component to define a specific route
// 5. Use the 'element' prop in the Route component to specify the component to render for that route
// 6. Use the 'path' prop in the Route component to specify the path for that route
// 7. Use the 'exact' prop in the Route component to specify that the path should match exactly

// LINK COMPONENT: RECOMMENDED TO USE INSTEAD OF ANCHOR TAGS FOR NAVIGATION
//                 BECAUSE ANCHOR TAGS WILL CAUSE A PAGE REFRESH,

// 1. Use the 'link' component from 'react-router-dom' to create links to navigate between routes
// 2. Use the 'to' prop in the 'link' component to specify the path to navigate to


// In version 6 and above, you need to use Routes instead of Switch

// SO INSTEAD OF:
// <Switch>
//     <Route path="/" component={Home} />
//     <Route path="/create" component={Create} />
// </Switch>

// YOU SHOULD USE:
// <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/create" element={<Create />} />
// </Routes>

// ROUTER PARAMETERS//
// VERY USEFUL FOR DYNAMIC ROUTES ESPECIALLY WHEN YOU HAVE A LIST OF ITEMS
// OR/AND IMPLEMENTING DIFFERENT ACCOUNTS IN YOUR APPLICATION

// To pass parameters in the URL, you can use a colon followed by the parameter name in the path
// /blogs/id

// Example:
// <Route path="/blogs/:id" element={<BlogDetails />} />

// To access the parameter in the component,
// you can use the useParams hook from 'react-router-dom'
// Example:
// const { id } = useParams();