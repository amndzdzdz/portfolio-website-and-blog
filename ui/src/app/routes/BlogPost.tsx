import { useEffect, useRef, useState } from 'react';
import CommentSection from '../../components/comment/CommentSection';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { getBlogPostById } from '../api/blogPostApi';
import type { Blog } from '../../types/Blog';
import { getComments } from '../api/commentApi';
import type { CommentProps } from '../../types/CommentProps';

export default function BlogPost() {
  const { id } = useParams();
  const isInitialMount = useRef(true);
  const [blogPost, setBlogPost] = useState<Blog | undefined>(undefined);
  const [comments, setComents] = useState<CommentProps[] | undefined>(
    undefined,
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      loadBlogPost(id!);
      loadComments(id!);
    }
  }, []);

  async function loadBlogPost(id: string) {
    try {
      const blogPost = await getBlogPostById(id!);
      setBlogPost(blogPost['blogPost']);
    } catch (err) {
      console.log('An error occured: ' + err);
    }
  }

  async function loadComments(id: string) {
    try {
      const comments = await getComments(id);
      setComents(comments['comments']);
    } catch (err) {
      console.log('An error occured: ' + err);
    }
  }

  return (
    <>
      <section className="min-h-screen bg-gray-50 py-30">
        {blogPost && (
          <>
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                {blogPost!.title}
              </h1>

              <div className="flex items-center text-gray-600 space-x-2 mb-10">
                <span>Joseph Dziri</span>
                <span>•</span>
                <span>{blogPost!.timeToRead}</span>
                <span>•</span>
                <span>17.11.2025</span>
              </div>

              <img
                className="rounded-xl shadow-lg w-full mb-12"
                src={blogPost!.image}
                alt="Blog Image"
              />

              <article className="text-justify ">
                <div className="text-gray-700">{parse(blogPost!.content)}</div>
              </article>
            </div>
          </>
        )}
      </section>

      <CommentSection comments={comments!}></CommentSection>
    </>
  );
}
