import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
const BlockContent = require('@sanity/block-content-to-react')

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
			)
			.then((data) => setAuthor(data[0])).catch(console.error);
	},[]);

    if(!author) return <div>Loading...</div>
	return (
        <main className="relative ">
            <div className="p-10  container relative">
                <section className="bg-blue-100 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()}
                    className="rounded w-45 h-32 lg:w-65 lg:h-64 mr-8"
                     alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-6xl text-black mb-4">
                            Hey! I'm{" "}
                            <span className="text-black">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-black">
                           <BlockContent blocks={author.bio} projectId="kd2f1g1h" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
