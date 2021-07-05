import React from 'react'
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
const Products = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const location = useLocation();
    let isComponent = true ? isMobile : location.state.show;
    console.log("iscomponent" , isComponent);
    return (
        <div>
            { isMobile && isComponent? (
                    <div>
                        Products
                    </div>
                ): null
            }
        </div>
    )
}

export default Products
