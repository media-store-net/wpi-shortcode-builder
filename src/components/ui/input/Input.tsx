import React, {Component, ReactElement} from "react";
import "./Input.css";

type props = {
    label: string,
    elementType: string,
    elementConfig: any,
    value: string,
    disabled: boolean,
    changed: React.ChangeEvent<HTMLInputElement>
}

class Input extends Component<props, {}> {

    inputElement: ReactElement | null = null;

    constructor(props: any) {
        super(props);

        switch (this.props.elementType) {
            case ('input'):
                this.inputElement = <input
                    className="InputElement"
                    {...this.props.elementConfig}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.changed}/>;
                break;
            case ('textarea'):
                this.inputElement = <textarea
                    className=".InputElement"
                    {...this.props.elementConfig}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.changed}/>;
                break;
            case ('select'):
                this.inputElement = (
                    <select
                        className="InputElement"
                        //onChange={this.props.changed}
                        disabled={this.props.disabled}>
                        {this.props.elementConfig.options.map((option: any) => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                );
                break;
            default:
                this.inputElement = <input
                    className="InputElement"
                    {...this.props.elementConfig}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.changed}/>;
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const label = this.props.label !== '' ? <label>{this.props.label}</label> : '';
        return (
            <div className="Input">
                <label className="Label">{this.props.label}</label>
                {this.inputElement}
            </div>
        );
    }
}

export default Input;
