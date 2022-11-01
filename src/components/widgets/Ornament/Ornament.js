import "./Ornament.css";
const Ornament = ({src,top,left,right,width}) => {
    return ( 
        <img src={src} style={{top: top,left:left, right:right,width: width}} alt="ornament" className="ornament" />
     );
}
 
export default Ornament;