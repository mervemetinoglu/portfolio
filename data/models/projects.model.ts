export interface Tool {
	id: number;
	name: string;
}

export interface Project {
	id: number;
	url: string;
	img: string;
	name: string;
	tools: Tool[];
	description: string;
}
