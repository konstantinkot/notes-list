import React, {
    Component
} from "react";
import Notes from "./Notes.js";

import {
    withoutIndex
} from "./utils.js"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                "**Покупки**: чай, _кофе_",
                "**Дела**: работа, хобби"
            ]
        }; // state is always object
    }

    onNoteDelete = (indexToRemove) => {
        this.setState(oldState => {
            return { 
                notes: withoutIndex(oldState.notes, indexToRemove)
            }
        }); // setState - единственный разрешенный способ изменения состояния
    }

    onNoteCreate = (newNodeText) => {
         this.setState(oldState => {
            return {
                notes: [newNodeText].concat(oldState.notes)
            };
        }); // setState - единственный разрешенный способ изменения состояния
    }

    render() {
        return <Notes
        notes={this.state.notes}
        onDelete={this.onNoteDelete}
        onCreate={this.onNoteCreate}
        />;
    }
}


export default App;
