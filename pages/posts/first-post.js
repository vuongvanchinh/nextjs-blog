import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = (props) => {
    const imageStyle = {
        borderRadius: "20px"

    }
    return (
        <Layout>
        <Head>
            <title>FirstPost</title>
        </Head>
        <Image
            style={imageStyle}
            src='/images/profile.jpg'
            height={144}
            width={144}
        />
         <h1>First Post</h1>
        </Layout>
       
    );
}

export default FirstPost;
