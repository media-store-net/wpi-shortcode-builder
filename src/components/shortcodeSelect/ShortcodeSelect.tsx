import React, {Component} from "react";
import "./ShortcodeSelect.css";

class ShortcodeSelect extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="ShortcodeSelect">
                {this.props.children}
            </div>
        );
    }
}

export default ShortcodeSelect;
