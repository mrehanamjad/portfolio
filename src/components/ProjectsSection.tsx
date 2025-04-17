import Image from "next/image"
import Link from "next/link"
import {  Github, ExternalLink } from "lucide-react"
import Container from "./Container"
import data from "@/data/data.json"
import { AuroraText } from "./magicui/aurora-text"
import { TextAnimate } from "./magicui/text-animate"

const projects = data.projects;

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-900 text-gray-100 h-full rounded-t-3xl mx-2 py-20 relative">
      <Container>
        {/* Section header with animated underline */}
        <div className="text-center mb-16 relative">
                    <AuroraText className="text-4xl md:text-5xl font-bold mb-2" colors={["#c084fc","#60a5fa"]}>My Projects</AuroraText>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
                      
                      <TextAnimate animation="slideLeft" by="character" className="text-gray-400 mt-4 md:text-xl max-w-2xl mx-auto">Showcasing my technical expertise</TextAnimate>
        </div>

        {/* Projects grid with improved cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-xl flex flex-col"
            >
              {/* Image container with gradient overlay */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                
                {/* Category badge floating at the bottom */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-medium px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content area */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies section */}
                <div className="mt-auto">
                  <h4 className="text-xs uppercase text-gray-500 font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs font-medium bg-gray-700 text-blue-300 rounded-full hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons with hover effects */}
                <div className="flex justify-end items-center gap-3 mt-2">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg transition-all duration-300 text-gray-300 hover:text-white hover:scale-110"
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="p-2 bg-purple-700 hover:bg-purple-600 rounded-full shadow-lg transition-all duration-300 text-white hover:scale-110"
                    aria-label="Visit live site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </Container>
      
      {/* Background accent */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}