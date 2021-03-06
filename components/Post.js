import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
    return (
        <div className='w-full px-10 py-6 bg-white rouded-lg shadow-md mt-6'>
            {!compact && (
                <Link href={`/blog/${post.slug}`}>
                    <Image src={post.frontmatter.cover_image} width={600} height={420} alt={post.slug} className='mb-4 rounded cursor-pointer' />
                </Link>
            )}

            <div className='flex justify-between items-center'>
                <span className='font-light text-gray-600'>
                    {post.frontmatter.date}
                </span>
                <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
            </div>
            <div className='mt-2'>
                <Link href={`/blog/${post.slug}`}>
                    <a className='text-2xl text-gray-700 font-bold hover:underline'>{post.frontmatter.title}</a>
                </Link>
                {!compact && (
                    <p className='mt-2 text0gray-600'>{post.frontmatter.excerpt}</p>
                )}

            </div>
            {!compact && (
                <div className='flex justify-between items-center mt-6'>

                    <Link href={`/blog/${post.slug}`}>
                        <a className='text-gray-900 hover:text-blue-600'>Read More</a>
                    </Link>
                    <div className='flex items-center'>
                        <img src={post.frontmatter.author_image} alt='' className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block' />
                        <h3 className='text-gray-700 font-bold'>{post.frontmatter.author}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}
