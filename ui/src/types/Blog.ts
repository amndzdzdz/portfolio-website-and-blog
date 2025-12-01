import type { CommentProps } from './CommentProps';

export type Blog = {
  title: string;
  timeToRead: string;
  image: string;
  content: string;
  comments?: CommentProps[];
};
