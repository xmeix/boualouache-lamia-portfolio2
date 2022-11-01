import "./HiText.css";
const HiText = () => {

    const textOptions =[
        {
            id: 1,
            text: "Hey there!",
            class: "hi"
        },
        {
            id: 2,
            text: "I am Lamia BOUALOUACHE",
            class: "who"
        },
        {
            id: 3,
            text: "A software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
            class: "what"
        },
    ]

    return ( 
        
             <div className="hiText">
                {
                    textOptions.map((item) => <p key={item.id} className={item.class}>{item.text}</p>)
                    }
             </div>
        
     );
}
 
export default HiText;