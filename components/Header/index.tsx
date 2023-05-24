import Link from "next/link";

function Header() {
  return (
    <nav className="flex gap-6 items-center flex-wrap bg-teal-500 p-6">
      <a href="/" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        Home (from Blog Page)
      </a>
      <Link href="/" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        Blog (from Blog Page)
      </Link>
      <a href="/about" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        About (from Blog Page)
      </a>
    </nav>
  );
}

export default Header;