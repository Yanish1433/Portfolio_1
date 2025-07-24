import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              Hey there! I'm Yanish — a frontend developer and a 6th-sem BIT student who's obsessed with clean code,
              slick animations, and turning pixels into real experiences.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in React, Tailwind CSS, and JavaScript, I enjoy turning ideas into responsive
              and accessible UIs. I actively explore modern tools, contribute to projects, and strive for clean,
              efficient solutions that enhance user experience.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
  <a href="#contact" className="cosmic-button">
    Get In Touch
  </a>
  <a
    href="/documents/_Resume.pdf" // You can replace this with your actual CV path
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    Download CV
  </a>
</div>

          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development Card */}
            <div className="relative gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and applications with modern frameworks.
                  </p>
                </div>
              </div>

              {/* Pop-up */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-background p-4 rounded-lg shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-20">
                <p className="text-sm text-muted-foreground">
                  I build performant UIs using React, Tailwind, and modern frontend tools.
                </p>
              </div>
            </div>

            {/* UI/UX Card */}
            <div className="relative gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>

              {/* Pop-up */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-background p-4 rounded-lg shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-20">
                <p className="text-sm text-muted-foreground">
                  I focus on usability and accessibility while designing sleek user flows.
                </p>
              </div>
            </div>

            {/* Project Management Card */}
            <div className="relative gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to delivery with agile practices.
                  </p>
                </div>
              </div>

              {/* Pop-up */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-background p-4 rounded-lg shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-20">
                <p className="text-sm text-muted-foreground">
                  I coordinate development tasks and timelines, ensuring consistent progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
