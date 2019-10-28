import React, {Component} from "react";
import "./OutputArea.css";

class OutputArea extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="OutputArea">
                {this.props.children}
            </div>
        );
    }
}

export default OutputArea;
