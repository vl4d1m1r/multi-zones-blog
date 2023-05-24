import Link from "next/link";

function Posts() {
  return (
    <div className="mt-6">
      <div>
        <h2 className="text-2xl font-bold">Post 1</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry-s standard dummy text
          ever since the 1500s
        </p>
        <Link href="/post/1">Read more...</Link>
        </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Post 2</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry-s standard dummy text
          ever since the 1500s
        </p>
        <Link href="/post/2">Read more...</Link>
      </div>
    </div>
  );
}

export default Posts;