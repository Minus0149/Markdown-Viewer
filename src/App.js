import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
	const [markdown, setMarkdown] = useState("");
	return (
		<div className="App">
			<h1 className="heading">MARKDOWN EDITOR</h1>
			<Editor markdown={markdown} setMarkdown={setMarkdown} />
			{markdown && <Previewer markdown={markdown} />}
		</div>
	);
}

export default App;
