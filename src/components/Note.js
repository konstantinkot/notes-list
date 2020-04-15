import React, {
    Component
} from "react";
import ReactMarkdown from "react-markdown";


export default class Note extends Component {
    render() {
        return <div className = "Notes-Note" >
            <span className = "Notes-Note-Delete" onClick = {this.props.onDelete}>
            &times;
            </span>   
            <span className = "Notes-Note-Text" > {<ReactMarkdown source={this.props.text} />}</span>
            </div>;
    }
}
