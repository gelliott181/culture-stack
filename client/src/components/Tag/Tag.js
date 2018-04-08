import React from "react";
import { Item } from "semantic-ui-react";

export const Tag = ({children}) => (

    <Item>
        <div className={"secondary-font"}>
            #{children}  
        </div>
    </Item>
    
)


