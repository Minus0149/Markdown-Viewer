import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

const Editor = () => {
	return (
		<div className="Editor-container">
			<div className="Toolbar">
				<FaRegEdit />
				<span>EDITOR</span>
				<FiMinimize2 />
				<FiMaximize2 />
			</div>
			<textarea
				className="Editor"
				id="editor"
				type="text"
				placeholder="Enter your markdown here."
			></textarea>
		</div>
	);
};

export default Editor;
