document.addEventListener('DOMContentLoaded', () => {
    // Component Injection (Navbar & Footer)
    const injectComponents = () => {
        // Find which page is currently active
        const path = window.location.pathname;
        const page = path.split("/").pop();

        const getActiveClass = (href) => {
            if (href === '/' && (page === '' || page === 'index.html')) return 'active';
            if (page === href) return 'active';
            return '';
        };

        const navbarHTML = `
            <div class="container">
                <a href="index.html" class="logo">
                    🚀 Impulzo<span>bog</span>
                </a>
                <div class="menu-toggle" id="mobile-menu">
                    ☰
                </div>
                <nav class="nav-links" id="nav-links">
                    <a href="index.html" class="${getActiveClass('index.html')}">Inicio</a>
                    <a href="nosotros.html" class="${getActiveClass('nosotros.html')}">Nosotros</a>
                    <a href="programas.html" class="${getActiveClass('programas.html')}">Programas</a>
                    <a href="eventos.html" class="${getActiveClass('eventos.html')}">Eventos</a>
                    <a href="comunidad.html" class="${getActiveClass('comunidad.html')}">Comunidad</a>
                    <a href="contacto.html" class="btn btn-primary">Contacto</a>
                </nav>
            </div>
        `;

        const footerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-col">
                        <h4>Impulzobog</h4>
                        <p>Impulsando el ecosistema emprendedor en Bogotá, Colombia. Conectamos, educamos y aceleramos ideas innovadoras.</p>
                        <div class="social-links">
                            <a href="#" class="social-icon">FB</a>
                            <a href="#" class="social-icon">IG</a>
                            <a href="#" class="social-icon">LI</a>
                            <a href="#" class="social-icon">TW</a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Enlaces Rápidos</h4>
                        <div class="footer-links">
                            <a href="index.html">Inicio</a>
                            <a href="nosotros.html">Sobre Nosotros</a>
                            <a href="programas.html">Programas</a>
                            <a href="eventos.html">Eventos</a>
                            <a href="comunidad.html">Comunidad</a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Contacto</h4>
                        <div class="footer-links">
                            <p>📍 Bogotá, Colombia</p>
                            <p>📧 info@impulzobog.co</p>
                            <p>📞 +57 (300) 123-4567</p>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Impulzobog. Todos los derechos reservados.</p>
                </div>
            </div>
        `;

        const headerEl = document.getElementById('main-header');
        const footerEl = document.getElementById('main-footer');

        if (headerEl) headerEl.innerHTML = navbarHTML;
        if (footerEl) footerEl.innerHTML = footerHTML;
    };

    injectComponents();

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageBox = document.getElementById('form-message');
            messageBox.className = 'form-message success';
            messageBox.textContent = '¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.';
            contactForm.reset();

            setTimeout(() => {
                messageBox.style.display = 'none';
            }, 5000);
        });
    }
});
