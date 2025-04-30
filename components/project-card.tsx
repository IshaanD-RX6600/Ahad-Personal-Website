import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  role: string
  challenges: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  demoUrl,
  githubUrl,
  role,
  challenges,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">My Role</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Challenges Solved</h4>
          <p className="text-sm text-muted-foreground">{challenges}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {demoUrl && (
          <Button size="sm" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
