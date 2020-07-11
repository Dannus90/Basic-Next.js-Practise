import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const About = (props) => {
    // const [user, setUser] = useState(user);

    const { user, statusCode } = props;

    if (statusCode) {
        return <Error statusCode={statusCode} />;
    }

    return (
        <Layout title="About">
            <p>{user.name}</p>
            <img src={user.avatar_url} alt="Github user" />
        </Layout>
    );
};

About.getInitialProps = async (ctx) => {
    const res = await fetch("https://api.github.com/users/Dannus90");
    const status = res.status > 200 ? res.status : false;
    const data = await res.json();
    console.log(data);
    return { user: data, statusCode: status };
};

export default About;
