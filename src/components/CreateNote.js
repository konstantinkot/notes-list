import React, {Component} from "react";

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.inputRef = React.createRef();
    }
    onTextChange = (event) => {
        this.setState({
            text: event.target.value //присваиваем знач текстареа
        })
    }
    onReset = () => {
        this.setState({
            text: ""
        }, () => {
            this.inputRef.current.focus();
        });

    }
    onSave = () => {
        this.props.onCreate(this.state.text);
        this.onReset();
    }
    render() {
       
        return ( < div className = "Notes-Create-Wrapper" >
            <div className = "Notes-Create" >
          <div className="Notes-Create__Header-Wrapper">  <h1 className="Notes-Create__header">Заметки</h1></div>
            <
            textarea ref = {
                this.inputRef
            }
            className = "Notes-Create-Input"
            value = {
                this.state.text
            }
            onChange = {
                this.onTextChange
            }
            />  < /
            div > <
            div className = "Notes-Create-Buttons" >
            <
            button className = "Notes-Create-Button"
            onClick = {
                this.onSave
            } > Сохранить < /button> <
            button className = "Notes-Create-Button Notes-Create-Button_reset"
            onClick = {
                this.onReset
            } > Сброс < /button>     < /
            div >
            <
            /div>)
        }
    }
