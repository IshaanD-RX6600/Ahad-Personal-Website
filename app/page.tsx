import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { SkillSection } from "@/components/skill-section"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Ahad Ahmad</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Hi, I'm Ahad Ahmad
              </h1>
              <h2 className="mt-2 text-xl text-muted-foreground md:text-2xl">Software Developer & Problem Solver</h2>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
                I build innovative solutions that solve real-world problems with clean, efficient code.
              </p>
              <div className="mt-6 flex gap-4">
                <Button asChild>
                  <Link href="#projects">View My Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Ahad Ahmad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="bg-muted py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">My Background</h3>
                <p className="mb-4 text-muted-foreground">
                  I'm a passionate software developer with a strong foundation in problem-solving, math and creative
                  thinking. My journey in technology began with a curiosity about how things work, which led me to
                  explore programming and software development.
                </p>
                <p className="mb-4 text-muted-foreground">
                  I specialize in python projects that are not only functional but also provide exceptional user
                  experiences. My approach combines technical expertise with an eye for UI design and usability.
                </p>
                <h3 className="mb-4 text-xl font-semibold">Education</h3>
                <p className="mb-2 text-muted-foreground">
                  <strong> Highschooler </strong> - Cameron Heights Colledgiete instute
                </p>
                <p className="mb-4 text-muted-foreground">
                  <strong>CEMC Distinction for Pascal Contest Score 125</strong> - Recognized for excellence in
                  mathematical problem-solving
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">My Interests</h3>
                <p className="mb-4 text-muted-foreground">
                  Beyond coding, I'm passionate about continuous learning, problem-solving, and exploring new
                  technologies. I enjoy contributing to open-source projects and sharing knowledge with the developer
                  community.
                </p>
                <h3 className="mb-4 text-xl font-semibold">Fun Facts</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>I enjoy basketball with my friends on the weekends</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">My Projects</h2>
            <div className="grid gap-6">
              <ProjectCard
                title="Grade 11 CS Class Final Project"
                description="A comprehensive project developed as the final assignment for my Grade 11 Computer Science class, showcasing my programming skills and problem-solving abilities."
                techStack={["Python", "Pygame", "Git"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                demoUrl="https://project-demo.com"
                githubUrl="https://github.com/username/cs-final-project"
                role="Lead Developer"
                challenges="Implemented complex game mechanics and optimized performance for smooth gameplay across different devices."
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">Tech Stack & Skills</h2>
            <SkillSection
              skills={[
                { name: "Python", icon: "python" },
                { name: "JavaScript", icon: "javascript" },
                { name: "GitHub", icon: "github", isGithub: true },
              ]}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">Testimonials</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Ahad is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team."
                name="Ishaan Dhiman"
                title="Classmate"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Working with Ahad was a pleasure. He has a deep understanding of software development principles and always finds elegant solutions to complex problems."
                name="Noor Ahmad"
                title="Friend"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Ahad's technical expertise and collaborative approach made our project a success. He's not only skilled but also great at communicating complex concepts clearly."
                name="Josh Kapoor"
                title="Project Partner"
                imageUrl="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">Contact</h2>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:to.ahad.ahmad@gmail.com" className="text-muted-foreground hover:text-foreground">
                  to.ahad.ahmad@gmail.com
                </a>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/ahad_a__?igsh=MTgxbW9pOGxkZGx2Zw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahad Ahmad. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/ahad_a__?igsh=MTgxbW9pOGxkZGx2Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
