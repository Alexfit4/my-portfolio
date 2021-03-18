import React, { useEffect, useState } from "react";
import sanityCleint from "../client.js";

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityCleint
			.fetch(
				`*[_type == 'project']{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);
	return (
		<main className="relative">
			<section className="container mx-auto relative">
				<h1 className="text-5xl flex justify-center">My Projects</h1>
				<h2 className="text=lg text-gray-600 flex justify-center mb-12">
					{" "}
					Welcome to my project page!
				</h2>
				<section className="grid grid-cols-2 gap-8">
					{projectData &&
						projectData.map((project, index) => (
                            
							<article className="relative rounded-lg shadow-xl bg-white p-16">
                            <img
										src={project.mainImage.asset.url}
										alt={project.mainImage.alt}
										className="w-full"
									/>
								<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
									<a
										href={project.link}
										alt={project.title}
										target="blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div className="text-gray-500 text-xs space-x-4">
									<span>
										<strong className="font-bold">Finished on</strong>:{" "}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className="font-bold">Company</strong>:{" "}
										{project.place}
									</span>
									<span>
										<strong className="font-bold">Type</strong>:{" "}
										{project.projectType}
									</span>
									<p className="my-6 text-lg text-gray-700 leading-relax">
										{project.description}
									</p>
									<a
										href={project.link}
										target="blank"
										rel="noopener noreferrer"
										className="text-red-500 fnt-bold hover:underline hover:text-red-400 text-xl"
									>
										View The Project{" "}
										<span role="img" aria-label="right pointer">
											👉
										</span>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
