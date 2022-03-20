import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import BlogCard from '../../../src/components/Common/BlogCard';
import markdownToHTML from '../../../src/lib/markdownToHTML'
import Head from 'next/head';

interface Props {}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', ''),
      },
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params: { slug } 
}:{
  params:{slug:string}
}) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const post = matter(fileName);
  const content = await markdownToHTML(post.content || '')
  return {
    props: {
      frontmatter: post.data,
      content,
    }
  }
}

export default function PostPage(props: Props) {
  const { frontmatter, content } = props; 
  return (
    <>
      <style jsx>
        {`
          .post_page_container {
            min-height: calc(100vh - 68px - 216px);
          }
        `}
      </style>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta property='og:image' content={frontmatter.socialImage} />
        <meta property='description' content={frontmatter.description} />
      </Head>
      <div className='post_page_container mx-auto lg:w-4/5 xl:max-w-[1440px]'>
        <div
          dangerouslySetInnerHTML={{__html:content}}
        />
      </div>
    </>
  )
}