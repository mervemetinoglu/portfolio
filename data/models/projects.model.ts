export interface Tool {
  id: number;
  url: string;
  name: string;
}

export interface Project {
  id: number;
  url: string;
  name: string;
  tools: Tool[];
  description: string;
}
