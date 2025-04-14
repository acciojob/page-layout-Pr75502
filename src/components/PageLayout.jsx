import React from 'react';
const PageLayout = ({header,footer,children}) => {


    return (
        <div>
            <h1>{header}</h1>

            <p> <main>{children}</main></p>
            <p> {footer}</p>

        </div>
    )
}
export default PageLayout;