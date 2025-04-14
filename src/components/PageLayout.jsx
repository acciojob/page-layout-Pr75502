import React from 'react';
const PageLayout = ({ header, footer, children }) => {


    return (
        <div>
            <div>
                <h1>{header}</h1>
            </div>
            <div>
                <p>{children}</p>
            </div>

            <div>

                <p> {footer}</p>
            </div >

        </div>
    )
}
export default PageLayout;