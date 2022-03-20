import React from 'react'
import BlogCard from '../Common/BlogCard'
import Button from '../Common/Button'

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

function RecentBlog(props: Props) {
  const { posts } = props
  return (
    <section>
      <style jsx>{`
      .recent_blog_wrapper {
        padding: 64px 16px;
      }
      ul li {
        margin-bottom: 32px;
      }
      ul li:last-child {
        margin-bottom: 0px;
      }

      @media(min-width: 769px){
        section {
          position: relative;
        }
        .recent_blog_wrapper {
          padding: 80px 64px;
        }
        section:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          z-index: -1;
        }
        .section_heading {
          font-size: 42px;
          margin-bottom: 16px;
        }
        .content_wrapper {

        }
        .blog_list {
          display: flex;
          justify-content: space-between;      
        }
        .blog_list li {
          width: 320px;
          margin-bottom: 0px;
        }
      }
    `}</style>
      <div className='recent_blog_wrapper'>
        <h1 className='section_heading mb_8'>Recently on Blogs 👇</h1>
        <div className="content_wrapper">
            <p className='paragraph mb_32'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
        </div>

        <ul className='blog_list list_style_none'>
          {posts.map(({ slug, frontmatter }) => (
            <li key={slug} className='' >
              <BlogCard link={`/blogs/post/${slug}`} {...frontmatter} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RecentBlog
