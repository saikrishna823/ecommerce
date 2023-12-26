import React from 'react';
import Categories from './Categories';
function HelperComponent(props) {
    return (
        <>
            <Categories category="men's clothing"/>
              <Categories category="women's clothing"/>
              <Categories category="jewelery"/>
              <Categories category="electronics"/>
        </>
    );
}

export default HelperComponent;