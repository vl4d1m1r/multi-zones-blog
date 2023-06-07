import Link from "next/link";

const baseURL = process.env.DEV_BASE_URL // DEV_BASE_URL = "/"
// const baseURL = process.env.PROD_BASE_URL // PROD_BASE_URL = "/blog/"

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
        <Link href={`${baseURL}post/1`}>Read more...</Link>
        </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Post 2</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry-s standard dummy text
          ever since the 1500s
        </p>
        <Link href={`${baseURL}post/2`}>Read more...</Link>
      </div>
    </div>
  );
}

export default Posts;