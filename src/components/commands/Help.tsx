import React from "react";

type HelpCmd = {
	cmd: string;
	detail: string;
};
export default function Help() {
	const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "bio", detail: "Show my bio information." },
		{ cmd: "skills", detail: "List all of my skills." },
		{ cmd: "contact", detail: "List all of the contacts." },
		{ cmd: "projects", detail: "List all of my projects." },
		{ cmd: "ctrl + l", detail: "Clear the history." },
	];
	return (
		<div className="w-11/12 mx-auto">
			{listOfHelpCommands.map(({ cmd, detail }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-20">{cmd}</h1>
						<p className="text-gray-300 flex-1 ">{detail}</p>
					</div>
				);
			})}
		</div>
	);
}
