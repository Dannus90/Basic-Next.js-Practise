import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
    return (
        <Layout title={router.query.title}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At in,
                sint pariatur ducimus dignissimos dolorum dolorem accusantium
                hic officiis error corrupti ea numquam culpa, eos quo quia
                consectetur? Optio similique architecto consectetur suscipit sed
                repudiandae! Iure voluptatem atque consectetur perferendis.
            </p>
        </Layout>
    );
};

export default withRouter(Post);
