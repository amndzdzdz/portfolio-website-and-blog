import type { CommentProps } from '../../types/CommentProps';

export async function createComment(comment: CommentProps) {
  const res = await fetch(
    `http://localhost:8080/comments/${comment.blogPostId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: comment.name,
        message: comment.message,
        date: comment.date,
      }),
    },
  );
  return res.json();
}

export async function getComments(id: string) {
  const res = await fetch(`http://localhost:8080/comments/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
