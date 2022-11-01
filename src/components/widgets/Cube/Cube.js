import "./Cube.css";

const Cube = ({top,left,right,height,backgroundColor}) => {
    return ( 
        <div className="cube" style={{
            backgroundColor: backgroundColor,
            top: top,
            left: left,
            right: right,
            height: height
        }}>
        </div>
     );
}
 
export default Cube;