import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CodeXml } from "lucide-react"
import Container from "./Container"
import data from "@/data/data.json"

const projects = data.projects;

export default function ProjectsSection() {
  return (
    <section id="#projects" className="bg-cyan-100 text-black  h-full rounded-t-2xl mx-2 py-16 sticky top-8">
        <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
          <p className="text-gray-600 mt-2 md:text-xl">Some of my recent work</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project,idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
            <div className="absolute top-4 right-4 flex gap-2">
            <Link
              href={project.githubUrl}
              target="_blank"
              className=" p-2 bg-white rounded-full shadow-md transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 text-gray-800 hover:bg-black hover:text-white "
            >
              <CodeXml className="w-6 h-6" />
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              className="p-2 bg-white rounded-full shadow-md transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 text-gray-800 hover:bg-black hover:text-white "
            >
              <ArrowUpRight className="w-6 h-6 " />
            </Link>
            </div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>
      </Container>
    </section>
  )
}

