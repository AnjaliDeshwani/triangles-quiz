import "./App.css";
import CheckAngles from "./CheckAngles/CheckAngles";
import CalculateArea from "./CalculateArea/CalculateArea";
import CalculateHypotenuse from "./ClaculateHypotenuse/ClaculateHypotenuse";
import Quiz from "./Quiz/Quiz";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  // const [showCheckAngles, setShowCheckAngles]=useState(false)
  // const [showCalculateArea, setShowCalculateArea]=useState(false)
  // const [showCalculateHypotenuse, setShowCalculateHypotenuse]=useState(false)
  // const [showQuiz, setShowQuiz]=useState(false)

  // const onCheckAnglesHandler = () => {
  //   setShowCheckAngles(true)
  // }
  // const onCalculateAreaHandler = () =>{
  //   setShowCalculateArea(true)
  // }
  // const onCalculateHypotenuseHandler = () =>{
  //   setShowCalculateHypotenuse(true)
  //   console.log("anglesBtn")
  // }
  // const onQuizHandler = () => {
  //   var anglesBtn=document.querySelector("#angles-btn")
  //   console.log(anglesBtn)
  //   setShowQuiz(true)
  //   anglesBtn.style.display='none';
  // }
  return (
    <div>
      <h2>Lets have some fun with triangles!!</h2>
      {/* <button id="angles-btn" onClick={onCheckAnglesHandler}>{showCheckAngles?<CheckAngles/>:"Check Angles"}</button>
      <button id="area-btn" onClick={onCalculateAreaHandler}>{showCalculateArea?<CalculateArea/>:"Calculate Area"}</button>
      <button id="hypo-btn" onClick={onCalculateHypotenuseHandler}>{showCalculateHypotenuse? <CalculateHypotenuse/>:"Calculate Hypotenuse"}</button> */}
      {/* <button id="quiz-btn" onClick={onQuizHandler}>{showQuiz? <Quiz/>:"Take Quiz"}</button> */}
      {/* <a href="./Quiz.jsx">"Take Quiz"</a> */}
      <Router>
        <NavLink activeClassName="active" to="/checkangles">
          CheckAngles
        </NavLink>
        <NavLink activeClassName="active" to="/calculatearea">
          CalculateArea
        </NavLink>
        <NavLink activeClassName="active" to="/calculatehypotenuse">
          CalculateHypotenuse
        </NavLink>
        <NavLink activeClassName="active" to="/quiz">
          Take Quiz
        </NavLink>

        <Switch>
          <Route path="/checkangles" component={CheckAngles} />
          <Route path="/calculatearea" component={CalculateArea} />
          <Route path="/calculatehypotenuse" component={CalculateHypotenuse} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
