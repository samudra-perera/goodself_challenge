import { Comment } from "../interfaces/Comment";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

type CommentItemProps = {
  comment: Comment;
  addComment: (content: string, parentId: number | null) => void;
};

const CommentItem = ({ comment, addComment }: CommentItemProps) => {
  return (
    <div>
      <p>{comment.content}</p>
      <CommentForm parentId={comment.id} addComment={addComment} />
      {comment.children.length > 0 && (
        <CommentList comments={comment.children} addComment={addComment} />
      )}
    </div>
  );
};

export default CommentItem;
