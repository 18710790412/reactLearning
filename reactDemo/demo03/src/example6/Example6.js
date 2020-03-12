import React from 'react';
import ShowWords from './ShowWords';
import Buttons from './Buttons';
import { Colors }  from './Color'

function Example6(){
    return (
        <div>
            <Colors>
                <ShowWords />
                <Buttons />
            </Colors>
        </div>
    )
}
export default Example6;