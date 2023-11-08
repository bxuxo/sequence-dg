import './TitleScreen.css';

import { useEffect, useRef, useState } from 'react';

export default function TitleScreen({ author, title, enterCallback }) {
    const [ isHidden, setIsHidden ] = useState(false);
    const titleScreen = useRef(null);

    function onKeyDown(e) {
        if (e.key == 'Enter') {
            setIsHidden(true);
            enterCallback( );
        }
    }

    useEffect(( ) => {
        titleScreen.current.focus( );
    }, [ ]);

    return (
        <div 
            className={ 'title-screen hidden-scrollbar ' + (isHidden ? 'title-screen-hidden' : '') } 
            tabIndex={ -2 } 
            onKeyDown={ onKeyDown }
            ref={ titleScreen }
        >
            <h1 className='title'>{ title }</h1>
            <p className='author'>{ author }</p>
        </div>
    );
}