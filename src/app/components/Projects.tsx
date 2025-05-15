export default function Projects() {
    return (
      <section id="projects">
        <h2 className="text-2xl font-semibold text-primary mb-4">Projects</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="font-medium">Project Name</h3>
            <p className="text-sm text-gray-500">Brief description of the project.</p>
          </li>
        </ul>
      </section>
    )
  }