import React from "react";
import { Item } from "semantic-ui-react";

export const Tag = ({children}) => (

    <Item>  
        <div className={"secondary-font"} style={{marginBottom: "5px"}}>
            #{children}  
        </div>
    </Item>
    
)


