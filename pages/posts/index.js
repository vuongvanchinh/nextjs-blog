import Link from "next/link";

const Posts = (props) => {
  return (
    <h1>
      Post Pages <br />
      <Link href ='/'>
        <a >back to home</a>
      </Link>
    </h1>
  );
};

export default Posts;
