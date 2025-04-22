import React, { useState } from "react";



function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>


            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}  Message
            </button>
            {isVisible && <p> This is a toggle Message </p>}
        </div>
    );

}

export default ToggleMessage;