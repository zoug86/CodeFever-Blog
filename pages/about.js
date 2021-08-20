import Layout from '@/components/Layout'

export default function AboutPage() {
    return (
        <Layout title='About CodeFever'>
            <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

            <div className='bg-white shadow-lg rounded-lf px-10 py-6 mt-6'>
                <h3 className='text-2xl mb-5'>CodeFever Blog</h3>
                <p className='mb-3'>
                    This is a Blog built with Next.js, Tailwind, and Markdown
                </p>
                <p>
                    <span className='font-bold'>
                        Version 1.0.0
                    </span>
                </p>

            </div>
        </Layout>
    )
}
