import React from "react";
import Head from "next/head";

function SEO({ description, title, url, image_path }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} /> {/* 160 max */}
      <meta name="keywords" content="sample, keywords" /> {/* 10 max */}
      <meta name="google" content="notranslate" />
      <meta name="og:type" content="website" /> {/* website, article */}
      <meta property="og:url" content={url} />
      <met property="og:image" content={image_path} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta property="og:locale" content="en_GB" />
    </Head>
  );
}

export default SEO;


// import SEO from "../utils/seo";

// const Index = () => (
//   <div>
//     <SEO title="sample title" description="sample description" />

//     <p>Hello Next.js</p>
//   </div>
// );