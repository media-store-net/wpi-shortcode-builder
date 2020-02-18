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
        input: '',
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

    searchfilterHandler() {
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
                            changed={(event: any) => this.inputChangeHandler(event, searchFilterOptions).bind(this)}/>)
        });
    };

    searchResultHandler() {
        this.setState({withInput: false});
        this.setState({output: '[search_filter_result]'})
    };

    immoQueryHandler() {
        this.setState({withInput: true});
        this.setState({output: '[immobilien]'})
    };

    inputChangeHandler (event: ChangeEvent<HTMLInputElement>, stateKey: string) {

        event.preventDefault();
        event.persist();
        const state = {"input": event.target.value};

        this.setState(state);

        /*

                const updatedFormInputs: Object = {...this.state.formInputs};

                console.log(event.target.value);
                updatedFormInputs[stateKey]["value"] = event.target.value;

                this.setState({formInputs: updatedFormInputs});
        */
        console.log(this.state.input);

    };


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (
            <div className="App">
                <Header/>
                <ShortcodeSelect>
                    <Button clicked={this.searchfilterHandler.bind(this)}>Suchfilter</Button>
                    <Button clicked={this.searchResultHandler.bind(this)}>Suchergebnisse</Button>
                    <Button clicked={this.immoQueryHandler.bind(this)}>Immobilien-Query</Button>
                </ShortcodeSelect>
                <Input label="Beschriftung Button" elementType="input" disabled={false}
                       elementConfig={this.state.formInputs.searchFilterOptions.elementConfig}
                       changed={(event: any) => {
                           event.preventDefault();
                           event.persist();
                           console.log(event.target.value)
                       }
                       }
                       value={this.state.input}/>
                {this.state.withInput ? <InputArea>
                    <Input key={this.state.input} label="Beschriftung Button" elementType="input" disabled={false}
                           elementConfig={this.state.formInputs.searchFilterOptions.elementConfig}
                           value={this.state.input}
                        // @ts-ignore
                           changed={(event: ChangeEvent<HTMLInputElement>) => this.setState({'input': event.target.value})}/>
                </InputArea> : ''}
                <OutputArea>{this.state.output}</OutputArea>
            </div>
        );
    }
}
