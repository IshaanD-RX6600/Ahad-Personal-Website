import Image from "next/image"
import { Github } from "lucide-react"

interface Skill {
  name: string
  icon: string
  isGithub?: boolean
}

interface SkillSectionProps {
  skills: Skill[]
}

export function SkillSection({ skills }: SkillSectionProps) {
  // This function would normally map icon names to actual icon components
  // For simplicity, we're using a placeholder approach
  const getIconUrl = (iconName: string) => {
    return `/placeholder.svg?height=40&width=40`
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
            {skill.isGithub ? (
              <Github className="h-8 w-8" />
            ) : (
              <Image src={getIconUrl(skill.icon) || "/placeholder.svg"} alt={skill.name} width={40} height={40} />
            )}
          </div>
          <span className="mt-2 text-center font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}
