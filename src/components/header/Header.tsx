import React, {Component} from "react";

class Header extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <header className="Header">
                <h1>
                    Shortcode Builder
                </h1>
            </header>
        );
    }

}

export default Header;
