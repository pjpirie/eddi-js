import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import '../../App.css';

const defaultTemplate = "alert('Hello, World!');"
const documentChanged = docNewValue => {
    console.log(docNewValue);
};

function Editor() {
    return (
        <div className="editor">
            <AceEditor
                mode="javascript"
                theme="monokai"
                width="100%"
                height="100%"
                onChange={documentChanged}
                setOptions={
                    {
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }
                } />
        </div>
    )
}

export default Editor