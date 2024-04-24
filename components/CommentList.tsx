import { Comment } from "../interfaces/Comment";
import CommentItem from "./CommentItem";

type CommentListProps = {
  comments: Comment[];
  addComment: (content: string, parentId: number | null) => void;
};

const CommentList = ({ comments, addComment }: CommentListProps) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          addComment={addComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
