import { useState } from "react"
import Button from "./Button"

function Clicker() {

    // use a state to store clicks
    // later on, can use some sort of api call to save them somewhere
    const [clicks, setClicks] = useState(0)
    const [size, setSize] = useState(14)

    const incCount = () => {
        console.log("click")
        setClicks(clicks + 1)
        setSize(size+1)
    }

    return (
        <div>
            <Button 
                count={clicks}
                onClick={incCount}
                style={{fontSize: size}}
            />
        </div>
    )
}

export default Clicker;