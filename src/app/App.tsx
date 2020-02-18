import * as React from "react";
import "./App.scss"
const reactLogo = require("../assets/reactlogo.gif");

class App extends React.Component {

    public static title = "Hello World!"

    public render() {
        return (
            <div className="app">
                <img src={reactLogo.default} height="120" />
                <h1>{App.title}</h1>
            </div>
        );
    }
}

export default App;