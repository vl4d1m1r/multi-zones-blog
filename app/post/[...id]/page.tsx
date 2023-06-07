import Link from 'next/link'

export default function Post ({ params }: { params: { id: any } }) {
    return (
        <section className="m-6">
          <h3>Post #{params.id[0]}</h3>
          <p>Lorem ipsum</p>
          <Link href="/">Back to blog</Link>
          <br />
          <a href='/'>Back HOME</a>
        </section>
      )
}