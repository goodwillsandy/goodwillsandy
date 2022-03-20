import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import BlogCard from '../../src/components/Common/BlogCard';

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      socialImage: string;
      metaTitle: string;
      metaDesc: string;
    }
  }[]
}

export default function BlogsPage (props: Props) {
  const {posts} = props
  console.log('BlogsPage props', props)
  return (
    <>
      <style jsx>
        {`
          .blogs_page_container {
            min-height: calc(100vh - 68px - 216px);
          }
        `}
      </style>
      <div className='blogs_page_container mx-auto lg:w-4/5 xl:max-w-[1440px]'>
        <ul style={{
          display: 'flex',
          flexWrap: 'nowrap'
        }}>
          {posts.map(({slug, frontmatter}) => (
            <li key={slug} className='md:mx-16' >
              <BlogCard link={`/blogs/post/${slug}`} {...frontmatter} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    }
  }
}