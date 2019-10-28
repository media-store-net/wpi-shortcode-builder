import React, {Component, MouseEventHandler} from "react";
import "./Button.css";

type props = {
    clicked: MouseEventHandler
}

class Button extends Component <props, {}>  {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <button type="button" className="Button btn" onClick={this.props.clicked}>{this.props.children}</button>
        );
    }
}

export default Button;
