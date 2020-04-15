import React, {
    Component
} from "react";
import "./Notes.css";
import "./Note.css";
import "./CreateNote.css";
import Note from "./Note.js";
import CreateNote from "./CreateNote.js";




export default class Notes extends Component {

    render() {
        return <div className = "Notes" >
            <CreateNote onCreate = {this.props.onCreate}/>  
        <hr/> 
        {this.props.notes.map((text, index) => {
        if(text.trim()===''){return false} // если user строка без пробелов является пустотой, то отмена
         return <Note text = {text} key = {index} onDelete = { () => this.props.onDelete(index) } />
        
         
        })
        } < /div>
    }
}
