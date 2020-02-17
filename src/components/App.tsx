import * as React from "react";

class App extends React.Component {

    public static title = "Hello World!"

    public render() {
        return (
            <div className="app">
                <h1>{App.title}</h1>
            </div>
        );
    }
}

export default App;