import Header from "../components/Header";
import Posts from "../components/Posts";

export default function Blog() {
  return (
    <div>
      <Header />
      <main>
        <h1>Blog page</h1>
        <Posts />
      </main>
    </div>
  );
}