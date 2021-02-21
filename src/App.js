import './App.css';
import {Head} from "./Components/Navigation/Head";
import {Section1} from "./Components/Section1/Section1";
import {Section2} from "./Components/Section2/Section2";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Head/>
            <Section1/>
            <Section2/>
            <Footer/>
        </div>
    );
}


export default App;
