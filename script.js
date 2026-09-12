// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenuFn() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

burger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFn);
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenuFn();
});
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenuFn);
});

// Chat widget
const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');

chatToggle.addEventListener('click', () => {
  chatWidget.classList.toggle('open');
});

// Close chat when clicking outside
document.addEventListener('click', (e) => {
  if (!chatWidget.contains(e.target) && chatWidget.classList.contains('open')) {
    chatWidget.classList.remove('open');
  }
});

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeMenuFn();
    chatWidget.classList.remove('open');
  }
});

// Smooth header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15, 20, 25, 0.98)';
  } else {
    header.style.background = 'rgba(15, 20, 25, 0.92)';
  }
});
