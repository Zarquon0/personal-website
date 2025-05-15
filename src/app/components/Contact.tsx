export default function Contact() {
    return (
      <section id="contact">
        <h2 className="text-2xl font-semibold text-primary mb-4">Contact Me</h2>
        <form className="space-y-4 max-w-md">
          <input type="email" placeholder="Your email" className="w-full border p-2 rounded-lg" />
          <textarea placeholder="Your message" rows={4} className="w-full border p-2 rounded-lg"></textarea>
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg">Send</button>
        </form>
      </section>
    )
  }