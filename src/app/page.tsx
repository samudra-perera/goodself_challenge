"use client";
import { useState } from "react";
import type { NextPage } from "next";
import CommentForm from "../../components/CommentForm";
import CommentList from "../../components/CommentList";
import { Comment } from "../../interfaces/Comment";

const Page: NextPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [nextId, setNextId] = useState(1);

  const addComment = (content: string, parentId: number | null) => {
    const newComment: Comment = {
      id: nextId,
      content,
      parentId,
      children: [],
    };
    setNextId(nextId + 1);

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      const addCommentToParent = (comments: Comment[]): Comment[] => {
        return comments.map((comment) =>
          comment.id === parentId
            ? { ...comment, children: [...comment.children, newComment] }
            : { ...comment, children: addCommentToParent(comment.children) }
        );
      };
      setComments(addCommentToParent(comments));
    }
  };

  return (
    <div>
      <CommentForm parentId={null} addComment={addComment} />
      <CommentList comments={comments} addComment={addComment} />
    </div>
  );
};

export default Page;
