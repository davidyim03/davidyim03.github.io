import React from 'react'
import {useState} from 'react'

function DavidYim(){
    const [isGlowing, setIsGlowing] = useState(true);

    const handleglowon = () => {
        setIsGlowing(true)
    }

    const handleglowoff = () => {
        setIsGlowing(false)
    }

    const glowoff =  <div className="home">
                        <div className="signoff">
                            D<span>av</span>id<span>&nbsp;</span><span>Y</span>im
                            <span>&nbsp;</span><span>&nbsp;</span>
                            <button class="glowbutton" onClick={handleglowon}>OFF</button>
                        </div>
                    </div>

    const glowon = <div className="home">
                        <div className='sign'>
                            <span>David</span><span>&nbsp;</span><span>Yim</span>
                            <span>&nbsp;</span><span>&nbsp;</span>
                            <button class="glowbutton" onClick={handleglowoff}>ON</button>
                        </div> 
                    </div>


    return(
        <div >
            {isGlowing ? glowon : glowoff}
        </div>
    )
}

export default DavidYim