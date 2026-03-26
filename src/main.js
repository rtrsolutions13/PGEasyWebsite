import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="bg-container">
    <div class="bg-overlay"></div>
  </div>

  <header id="header">
    <div class="logo">
      <div class="logo-dot"></div>
      Easy PG
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="tag fade-in-up delay-1">Coming Soon</div>
      <h1 class="fade-in-up delay-2">Hostel Management,<br><span>Revolutionized.</span></h1>
      <p class="fade-in-up delay-3">The boldest, most intuitive platform designed specifically for PG owners. Manage tenants, collect rent, and scale your business with zero friction.</p>
      
      <form class="cta-form fade-in-up delay-4" id="notify-form">
        <input type="email" placeholder="Enter your email to get early access" required>
        <button type="submit" class="btn-primary">Request Access</button>
      </form>
    </section>

    <section class="features">
      <div class="features-header fade-in-up">
        <h2>Features that WoW</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto;">Everything you need to run your paying guest accommodations, packaged in a breathtaking unified interface.</p>
      </div>

      <div class="features-grid">
        <div class="feature-card fade-in-up">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3>Smart Tenant Onboarding</h3>
          <p>Ditch the paperwork. Digital KYC, automated agreement generation, and instant room assignments with a few taps.</p>
        </div>

        <div class="feature-card fade-in-up" style="transition-delay: 0.1s;">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3>Automated Rent Collection</h3>
          <p>Never chase payments again. Automated reminders, integrated UPI/cards, and instant reconciliation on your dashboard.</p>
        </div>

        <div class="feature-card fade-in-up" style="transition-delay: 0.2s;">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h3>Complaint Delegation</h3>
          <p>Keep tenants happy with modern issue tracking. Assign complaints to staff, track resolution time, and maintain harmony.</p>
        </div>
      </div>
    </section>
  </main>
`

// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Form submission simulation
document.getElementById('notify-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const btn = e.target.querySelector('button')
  const originalText = btn.innerText
  btn.innerText = 'Added to Waitlist!'
  btn.style.background = 'linear-gradient(135deg, #00f0ff, #1a6ff0)'
  
  setTimeout(() => {
    btn.innerText = originalText
    btn.style.background = ''
    e.target.reset()
  }, 3000)
})

// Trigger animations on scroll and load
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Delay initial load animations slightly for effect
setTimeout(() => {
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el)
  })
}, 100)
