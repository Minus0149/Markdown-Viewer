import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

const Editor = () => {
	return (
		<div className="Editor-container">
			<div className="Toolbar">
				<div>
					<FaRegEdit className="Icon" />
					<span>EDITOR</span>
				</div>
				<div>
					<FiMinimize2 className="Icon" />
					<FiMaximize2 className="Icon" />
				</div>
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
