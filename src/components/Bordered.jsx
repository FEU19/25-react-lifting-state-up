import React from 'react';

// The content of the <Bordered> tag can be anything.
// The CSS is defined in App.css
const Bordered = ({ children }) => (
    <div className="bordered"> {children} </div>
)

export default Bordered;
