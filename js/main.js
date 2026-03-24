document.addEventListener('DOMContentLoaded', () => {
    // Component Injection (Navbar & Footer)
    const injectComponents = () => {
        const navbarHTML = `
            <div class="container">
                <a href="#inicio" class="logo">
                    <img src="assets/img/logo.png" alt="Impulzobog" style="height:40px;">
                </a>
                <div class="menu-toggle" id="mobile-menu">
                    ☰
                </div>
                <nav class="nav-links" id="nav-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#programas">Productos</a>
                    <a href="#eventos">Eventos</a>
                    <a href="#comunidad">Comunidad</a>
                    <a href="#contacto" class="btn btn-primary">Contacto</a>
                </nav>
            </div>
        `;

        const footerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-col">
                        <h4>Impulzobog</h4>
                        <p>Impulsando el ecosistema y conectando tus productos con nuevos actores del mercado en Bogotá, Colombia.</p>
                        <div class="social-links">
                            <a href="https://instagram.com/impulzobog" target="_blank" class="social-icon" style="width: auto; padding: 0 1rem; border-radius: 20px; text-decoration: none; font-weight: 500;">
                                📸 @impulzobog
                            </a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Explorar</h4>
                        <div class="footer-links">
                            <a href="#inicio">Inicio</a>
                            <a href="#nosotros">Sobre Nosotros</a>
                            <a href="#programas">Nuestros Productos</a>
                            <a href="#eventos">Eventos</a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Contacto</h4>
                        <div class="footer-links">
                            <p>📍 Bogotá, Colombia</p>
                            <p>📧 comunidad@impulzobog.com</p>
                            <p>📞 +57 320 338 7148</p>
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

        // Close mobile menu on anchor link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });
    }

    // Active state highlighting during horizontal scroll or anchor clicks
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navAnchors.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

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
