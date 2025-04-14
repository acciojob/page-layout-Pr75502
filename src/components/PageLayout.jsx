import React from 'react';
const PageLayout = ({header,footer,children}) => {


    return (
        <div>
            {header}
            <main>{children}</main>
            {footer}

        </div>
    )
}
export default PageLayout;