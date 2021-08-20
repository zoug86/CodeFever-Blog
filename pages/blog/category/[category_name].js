import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { sortByDate } from '@/utils/index'

export default function CategoryBlogPage({ posts, categoryName }) {
    return (
        <Layout>
            <h1 className='text-5xl border-b-4 p-5'>Posts about {categoryName}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const categories = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)
        return frontmatter.category.toLowerCase()
    })

    const paths = categories.map(category => ({
        params: { category_name: category }
    }))
    // console.log(paths)
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { category_name } }) {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontmatter } = matter(markdownWithMeta)
        return { slug, frontmatter }
    })

    // Filter posts by category
    const categoryPosts = posts.filter(post => (
        post.frontmatter.category.toLowerCase() === category_name
    ))
    return {
        props: {
            posts: categoryPosts.sort(sortByDate),
            categoryName: category_name
        }
    }
}