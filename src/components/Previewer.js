import React from "react";
import { FaMarkdown } from "react-icons/fa";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const Previewer = () => {
	return (
		<div className="Previewer">
			<div className="Toolbar">
				<FaMarkdown />
				<span>PREVIEWER</span>
				<FiMinimize2 />
				<FiMaximize2 />
			</div>
			<div className="preview" id="preview"></div>
		</div>
	);
};

export default Previewer;
