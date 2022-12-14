import "./Home.css";
import Cube from "../widgets/Cube/Cube"; 
import hImg from "../../media/illustrations/illustration2.png";
import HiText from "../widgets/HiText/HiText";
import ornament1 from "../../media/illustrations/Ornament1.svg";
import Ornament from "../widgets/Ornament/Ornament";
const Home = () => {
    return ( 
        <section className="home" id="home">
             
                    <Ornament src={ornament1} top={"20vh"} right={"15%"}  width={'10%'}/>
                    <Cube top={"0"} left={"0"} right={"55%"} height={"100vh"} backgroundColor={"var(--back1)"}/>
                    <Cube top={"0"} left={"30%"} right={"0"} height={"80vh"} backgroundColor={"var(--violet)"}/>
                    <img className="hiImage" src={hImg} alt="HImage" />
                    <HiText/>
                 
        </section>
     );
}
 
export default Home;