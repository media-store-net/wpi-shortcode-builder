import React, {Component} from "react";
import "./InputArea.css";

class InputArea extends Component<{}, {}> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="InputArea">
                {this.props.children}
            </div>
        );
    }

}

export default InputArea;
