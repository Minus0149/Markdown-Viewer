import React from "react";
import { FaMarkdown } from "react-icons/fa";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const Previewer = () => {
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
			<div className="Preview" id="preview"></div>
		</div>
	);
};

export default Previewer;
