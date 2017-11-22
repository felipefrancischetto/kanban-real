export interface Card {
  id: number;
  category: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  description: string;
}
