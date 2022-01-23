import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

export default function MyBlog() {
  return (
    <Layout>
      <Head>
        <title>My Blog</title>
      </Head>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="ham"
      />
      <h1>ham_햄</h1>
      <p>I love React. I love Next js</p>
    </Layout>
  );
}
