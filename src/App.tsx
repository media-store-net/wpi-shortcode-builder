import React, {ChangeEvent, Component} from 'react';
import './App.css';

import Header from "./components/header/Header";
import ShortcodeSelect from "./components/shortcodeSelect/ShortcodeSelect";
import Button from "./components/ui/button/Button";
import InputArea from "./components/input/InputArea";
import OutputArea from "./components/output/outputArea";
import Input from "./components/ui/input/Input";

export default class App extends Component<{}, {}> {

    state = {
        withInput: false,
        output: '',
        formInputs: {
            searchFilterOptions: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Button Beschriftung'
                },
                value: 'Filter anwenden'
            }
        }

    };

    constructor(props: any) {
        super(props);

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    searchfilterHandler = () => {
        this.setState({withInput: true});

        const string: string = [
            '[',
            'searchFilter',
            'btn_text',
            '=',
            this.state.formInputs.searchFilterOptions.value,
            ']'
        ].join(' ');


        this.setState({
            output: (<Input label="Ausgabe: " elementType={this.state.formInputs.searchFilterOptions.elementType}
                            elementConfig={this.state.formInputs.searchFilterOptions.elementConfig}
                            disabled={true} value={string}
                //@ts-ignore
                            changed={(event: any) => this.inputChangeHandler(event, searchFilterOptions)}/>)
        });
    };

    searchResultHandler = () => {
        this.setState({withInput: false});
        this.setState({output: '[search_filter_result]'})
    };

    immoQueryHandler = () => {
        this.setState({withInput: true});
        this.setState({output: '[immobilien]'})
    };

    inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, stateData: Object) => {
        event.persist();

        const updatedFormInputs: Object = {...this.state.formInputs};

        console.log(event.target.value);
        // @ts-ignore
        updatedFormInputs[stateData].value = event.target.value;

        this.setState({formInputs: updatedFormInputs});
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Header/>
                <ShortcodeSelect>
                    <Button clicked={this.searchfilterHandler}>Suchfilter</Button>
                    <Button clicked={this.searchResultHandler}>Suchergebnisse</Button>
                    <Button clicked={this.immoQueryHandler}>Immobilien-Query</Button>
                </ShortcodeSelect>
                {this.state.withInput ? <InputArea>
                    <Input label="Beschriftung Button" elementType="input" disabled={false}
                           elementConfig={this.state.formInputs.searchFilterOptions.elementConfig}
                           value={this.state.formInputs.searchFilterOptions.value}
                        //@ts-ignore
                           changed={(event: ChangeEvent<HTMLInputElement>) => this.inputChangeHandler(event, "searchFilterOptions")}/>
                </InputArea> : ''}
                <OutputArea>{this.state.output}</OutputArea>
            </div>
        );
    }
}
