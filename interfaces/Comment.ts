export interface Comment {
  id: number;
  parentId: number | null;
  content: string;
  children: Comment[];
}
