import React from 'react';
import AnyChart from 'anychart-react.min.js';
// import AnyChart from 'anychart-react'

function Nomics() {
    return (
        <div>
            <AnyChart instance={"https://widget.nomics.com/embed.js"}
            // type="" 
            // data=""
            // title=""
                class="nomics-ticker-widget" 
                data-name="VeChain Thor" 
                data-base="VET" 
                data-quote="KES" 
                // src="https://widget.nomics.com/embed.js"
            />
        </div>
    )
}

export default Nomics


