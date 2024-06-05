export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

export interface Highlight {
  start_index: number;
  end_index: number;
  highlighted_text: string;
  color: string;
}
