import type { NextPage } from 'next'
import Hero from '../src/components/Home/Hero';
import RecentBlog from '../src/components/Home/RecentBlog';
import RecentWork from '../src/components/Home/RecentProjects';
import fs from 'fs';
import matter from 'gray-matter';

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      socialImage: string;
      metaTitle: string;
      metaDesc: string;
    }
  }[];
}


const Home = (props: Props) => {
  const {posts} = props
  return (
    <>
      <style jsx>
        {`
          main {
            
          }
          .promotional_space {
            width: 100%;
            height: 205px;
            background: #9391EC;
          }
        `}
      </style>

      <Hero />
      <RecentWork />
      <div className="promotional_space">
        
      </div>
      <RecentBlog posts={posts} />

    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync('./posts');
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`./posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.slice(0,3),
    }
  }
}

export default Home
