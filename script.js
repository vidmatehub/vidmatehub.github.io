// Interactive elements for the Vidmate Brutalist page

document.addEventListener("DOMContentLoaded", () => {
  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Watch all sections and cards
  document.querySelectorAll("section, .border-4").forEach((el) => {
    observer.observe(el)
  })

  // Simple sticky nav highlight
  const navLinks = document.querySelectorAll("nav a")
  window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("text-primary")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-primary")
      }
    })
  })

  // Console log for SEO check
  console.log("[v0] VidmateHub Page Loaded - SEO Optimized Structure Initialized")
})
