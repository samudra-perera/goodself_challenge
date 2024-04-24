import { useState, FormEvent } from "react";
type CommentProps = {
  parentId: number | null;
  addComment: (content: string, parentId: number | null) => void;
};

const CommentForm = ({ parentId, addComment }: CommentProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addComment(content, parentId);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        required
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
