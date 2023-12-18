import $ from "jquery";
import { marked } from "marked";
import React from "react";
import { FaMarkdown } from "react-icons/fa";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import Prism from "prismjs";
import "../prism.css";

const Previewer = (props) => {
	const markedrRenderer = new marked.Renderer();

	const convertStringToHTML = (htmlString) => {
		const parser = new DOMParser();
		const html = parser.parseFromString(htmlString, "text/html");
		return html.body;
	};

	const preview = convertStringToHTML(marked.parse(props.markdown));

	markedrRenderer.link = function (e, t, a) {
		return `<a target="_blank" href="${e}">${a}</a>`;
	};

	markedrRenderer.code = function (c, i, b) {
		return `<pre><code>${Prism.highlight(
			c,
			Prism.languages.javascript,
			"javascript"
		)}</code></pre>`;
	};

	marked.use({
		renderer: markedrRenderer,
	});
	$("#preview").html(preview);
	return (
		<div className="Previewer-container">
			<div className="Toolbar">
				<div>
					<FaMarkdown className="Icon" />
					<span>PREVIEWER</span>
				</div>
				<div>
					<FiMinimize2 className="Icon" />
					<FiMaximize2 className="Icon" />
				</div>
			</div>
			<div className="Preview" id="preview" />
		</div>
	);
};

export default Previewer;
