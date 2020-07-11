import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
    <li>
        {/* as cleans up the query params and makes it look nicer */}
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
);

const Blog = () => {
    return (
        <Layout title="My Blog">
            <ul>
                <PostLink slug="React-post" title="React" />
                <PostLink slug="Angular-post" title="Angular" />
                <PostLink slug="Vue-post" title="Vue" />
            </ul>
        </Layout>
    );
};

export default Blog;
