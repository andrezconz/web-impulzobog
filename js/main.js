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
                    <a href="#impacto">Impacto</a>
                    <a href="#categorias">Categorías</a>
                    <a href="#beneficios">Beneficios</a>
                    <a href="#sumate" class="btn btn-primary">¡Únete ahora!</a>
                </nav>
            </div>
        `;

        const footerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-col">
                        <h4>Asociación Impulzobog</h4>
                        <p>NIT 902.015.443-7</p>
                        <p>Sujetos a la inspección y control de la Alcaldía Mayor de Bogotá.</p>
                        <div class="social-links">
                            <a href="https://instagram.com/impulzobog" target="_blank" class="social-icon">
                                📸 Instagram
                            </a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Enlaces</h4>
                        <div class="footer-links">
                            <a href="#inicio">Inicio</a>
                            <a href="#impacto">Nuestro Impacto</a>
                            <a href="#categorias">Categorías</a>
                            <a href="#beneficios">Beneficios</a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Contacto Directo</h4>
                        <div class="footer-links">
                            <p>📧 COMUNIDAD@IMPULZOBOG.COM</p>
                            <p>🌐 www.impulzobog.com</p>
                            <p>📍 Bogotá, Colombia</p>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Asociación Impulzobog. Todos los derechos reservados.</p>
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

    // Active state highlighting
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
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

    // Form Logic
    const associationForm = document.getElementById('association-form');
    if (associationForm) {
        associationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');

            // Basic animation for feedback
            feedback.style.display = 'block';
            feedback.className = 'form-feedback success';
            feedback.innerHTML = '¡Gracias por tu interés! Hemos recibido tus datos y nos pondremos en contacto contigo pronto vía WhatsApp.';

            associationForm.reset();

            setTimeout(() => {
                feedback.style.opacity = '0';
                setTimeout(() => {
                    feedback.style.display = 'none';
                    feedback.style.opacity = '1';
                }, 500);
            }, 5000);
        });
    }
});
