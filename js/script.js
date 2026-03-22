function showTab(id) {
    document.querySelectorAll('.project-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected','false');
    });
    const panel = document.getElementById('panel-' + id);
    const btn   = document.getElementById('tab-' + id);
    if (panel) panel.classList.add('active');
    if (btn)   { btn.classList.add('active'); btn.setAttribute('aria-selected','true'); }
}

function sendForm(e) {
    e.preventDefault();
    const nombre  = document.getElementById('nombre').value.trim();
    const email   = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    if (!nombre || !email || !mensaje) {
        alert('Por favor completa los campos requeridos.');
        return;
    }
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';
}

// Fade-in on scroll
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));