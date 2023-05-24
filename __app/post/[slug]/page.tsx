import Header from "../../../components/Header";

export default function SinglePost({ params }: { params: { slug: [] } }) {

  return (
    <div>
      <Header />
      <main >
        <h1>Single Post page</h1>
        <p>Post slug: {params.slug}</p>
        <p>We can use this slug to fetch post details from server</p>
      </main>
    </div>
  );
}