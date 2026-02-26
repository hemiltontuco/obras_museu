// Controle do carrossel de obras
let currentObraSlideIndex = 0;
const totalObraSlides = 4;

// Controle do carrossel de notícias
let currentNoticiaIndex = 0;
const totalNoticias = 3;

// Controle da timeline
let currentTimelineIndex = 0;
const totalTimelineSlides = 8;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initObras();
    initNoticias();
    initTimeline();
    initScrollAnimations();
    initSmoothScroll();
});

// Inicializar obras
function initObras() {
    updateObraSlideDisplay();
    updateSwipeIndicators();
}

// Atualizar exibição da obra
function updateObraSlideDisplay() {
    const obrasTrack = document.querySelector('.obras-track');
    if (obrasTrack) {
        const translateX = -(currentObraSlideIndex * (100 / totalObraSlides));
        obrasTrack.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar classes active
        const slides = document.querySelectorAll('.obra-slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentObraSlideIndex);
        });
        
        // Atualizar navegação
        updateObraNavigation();
        updateObraIndicators();
        updateSwipeIndicators();
    }
}

// Navegar para obra anterior
function previousObraSlide() {
    if (currentObraSlideIndex > 0) {
        currentObraSlideIndex--;
        updateObraSlideDisplay();
        addTransitionEffect();
    }
}

// Navegar para próxima obra
function nextObraSlide() {
    if (currentObraSlideIndex < totalObraSlides - 1) {
        currentObraSlideIndex++;
        updateObraSlideDisplay();
        addTransitionEffect();
    }
}

// Atualizar navegação das obras
function updateObraNavigation() {
    const prevBtn = document.querySelector('.obras-prev');
    const nextBtn = document.querySelector('.obras-next');
    
    if (prevBtn && nextBtn) {
        // Desabilitar botão anterior no primeiro slide
        if (currentObraSlideIndex === 0) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }
        
        // Desabilitar botão próximo no último slide
        if (currentObraSlideIndex === totalObraSlides - 1) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }
}

// Inicializar notícias
function initNoticias() {
    updateNoticiaDisplay();
    updateSwipeIndicators();
}

// Atualizar exibição da notícia
function updateNoticiaDisplay() {
    const noticiasTrack = document.querySelector('.noticias-track');
    if (noticiasTrack) {
        const translateX = -(currentNoticiaIndex * (100 / totalNoticias));
        noticiasTrack.style.transform = `translateX(${translateX}%)`;
        updateNoticiaIndicators();
        updateSwipeIndicators();
    }
}

// Navegar para notícia anterior
function previousNoticia() {
    currentNoticiaIndex = (currentNoticiaIndex - 1 + totalNoticias) % totalNoticias;
    updateNoticiaDisplay();
    addTransitionEffect();
}

// Navegar para próxima notícia
function nextNoticia() {
    currentNoticiaIndex = (currentNoticiaIndex + 1) % totalNoticias;
    updateNoticiaDisplay();
    addTransitionEffect();
}

// Inicializar timeline
function initTimeline() {
    updateTimelineDisplay();
}

// Atualizar exibição da timeline
function updateTimelineDisplay() {
    const timelineTrack = document.querySelector('.timeline-track');
    if (timelineTrack) {
        const translateX = -(currentTimelineIndex * (100 / totalTimelineSlides));
        timelineTrack.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar indicadores visuais das setas
        updateTimelineNavigation();
    }
}

// Navegar para slide anterior da timeline
function previousTimelineSlide() {
    if (currentTimelineIndex > 0) {
        currentTimelineIndex--;
        updateTimelineDisplay();
        addTimelineTransitionEffect();
    }
}

// Navegar para próximo slide da timeline
function nextTimelineSlide() {
    if (currentTimelineIndex < totalTimelineSlides - 1) {
        currentTimelineIndex++;
        updateTimelineDisplay();
        addTimelineTransitionEffect();
    }
}

// Atualizar navegação da timeline
function updateTimelineNavigation() {
    const prevBtn = document.querySelector('.timeline-prev');
    const nextBtn = document.querySelector('.timeline-next');
    
    if (prevBtn && nextBtn) {
        // Desabilitar botão anterior no primeiro slide
        if (currentTimelineIndex === 0) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }
        
        // Desabilitar botão próximo no último slide
        if (currentTimelineIndex === totalTimelineSlides - 1) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }
}

// Adicionar efeito de transição da timeline
function addTimelineTransitionEffect() {
    const timelineTrack = document.querySelector('.timeline-track');
    if (timelineTrack) {
        timelineTrack.style.transition = 'transform 0.5s ease-in-out';
    }
}

// Função para FAQ
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todos os FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-icon').textContent = '+';
    });
    
    // Se não estava ativo, abrir este FAQ
    if (!isActive) {
        faqItem.classList.add('active');
        element.querySelector('.faq-icon').textContent = '−';
    }
}

// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adicionar efeito de transição
function addTransitionEffect() {
    const elements = document.querySelectorAll('.obra-content, .noticia-item');
    elements.forEach(element => {
        element.style.opacity = '0.7';
        element.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150);
    });
}

// Inicializar animações de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.section-title, .projeto-content, .timeline-item, .faq-item');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Inicializar scroll suave para links da navegação
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Controle do header no scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Navegação por teclado
document.addEventListener('keydown', function(e) {
    // Setas para navegar nas obras
    if (e.key === 'ArrowLeft') {
        const obraSection = document.querySelector('.obras-section');
        const timelineSection = document.querySelector('.timeline-section');
        const noticiasSection = document.querySelector('.noticias-section');
        
        if (isElementInViewport(obraSection)) {
            previousObraSlide();
        } else if (isElementInViewport(timelineSection)) {
            previousTimelineSlide();
        } else if (isElementInViewport(noticiasSection)) {
            previousNoticia();
        }
    } else if (e.key === 'ArrowRight') {
        const obraSection = document.querySelector('.obras-section');
        const timelineSection = document.querySelector('.timeline-section');
        const noticiasSection = document.querySelector('.noticias-section');
        
        if (isElementInViewport(obraSection)) {
            nextObraSlide();
        } else if (isElementInViewport(timelineSection)) {
            nextTimelineSlide();
        } else if (isElementInViewport(noticiasSection)) {
            nextNoticia();
        }
    }
});

// Função auxiliar para verificar se elemento está na viewport
function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Auto-play para carrossels (opcional)
function startAutoPlay() {
    // Auto-play para obras (desabilitado por padrão)
    // setInterval(() => {
    //     nextObra();
    // }, 5000);
    
    // Auto-play para notícias (desabilitado por padrão)
    // setInterval(() => {
    //     nextNoticia();
    // }, 7000);
}

// Função para dispositivos touch (swipe) melhorada
let touchStartX = 0;
let touchEndX = 0;
let touchTarget = null;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchTarget = e.target.closest('.obras-carousel, .noticias-carousel, .timeline-container, .timeline-viewport, .timeline');
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeImproved();
});

function handleSwipeImproved() {
    const swipeThreshold = 80;
    const diff = touchStartX - touchEndX;
    
    console.log('Swipe detected - diff:', diff, 'target:', touchTarget);
    
    if (Math.abs(diff) < swipeThreshold) return;
    
    if (touchTarget) {
        if (touchTarget.classList.contains('obras-carousel')) {
            console.log('Obras swipe:', diff > 0 ? 'next' : 'previous');
            if (diff > 0) {
                nextObraSlide();
            } else {
                previousObraSlide();
            }
        } else if (touchTarget.classList.contains('noticias-carousel')) {
            console.log('Noticias swipe:', diff > 0 ? 'next' : 'previous');
            if (diff > 0) {
                nextNoticia();
            } else {
                previousNoticia();
            }
        } else if (touchTarget.classList.contains('timeline-container') || 
                   touchTarget.classList.contains('timeline-viewport') || 
                   touchTarget.classList.contains('timeline')) {
            console.log('Timeline swipe:', diff > 0 ? 'next' : 'previous');
            if (diff > 0) {
                nextTimelineSlide();
            } else {
                previousTimelineSlide();
            }
        }
    }
}
    
    if (Math.abs(diff) > swipeThreshold) {
        const obraSection = document.querySelector('.obras-section');
        const timelineSection = document.querySelector('.timeline-section');
        const noticiaSection = document.querySelector('.noticias-section');
        
        if (isElementInViewport(obraSection)) {
            if (diff > 0) {
                nextObraSlide();
            } else {
                previousObraSlide();
            }
        } else if (isElementInViewport(timelineSection)) {
            if (diff > 0) {
                nextTimelineSlide();
            } else {
                previousTimelineSlide();
            }
        } else if (isElementInViewport(noticiaSection)) {
            if (diff > 0) {
                nextNoticia();
            } else {
                previousNoticia();
            }
        }
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('.header');
    
    if (!header.contains(e.target) && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Prevent zoom on input focus (iOS)
document.addEventListener('touchstart', function() {
    if (window.innerWidth < 768) {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
        }
    }
});

// Mobile Indicators Functions
function goToObraSlide(index) {
    console.log('goToObraSlide called with index:', index);
    currentObraSlideIndex = index;
    updateObraSlideDisplay();
}

function goToNoticia(index) {
    console.log('goToNoticia called with index:', index);
    currentNoticiaIndex = index;
    updateNoticiaDisplay();
}

function updateObraIndicators() {
    const indicators = document.querySelectorAll('.obras-indicators .mobile-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentObraSlideIndex);
    });
}

function updateNoticiaIndicators() {
    const indicators = document.querySelectorAll('.noticias-indicators .mobile-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentNoticiaIndex);
    });
}

// Gerenciar indicadores de swipe
function updateSwipeIndicators() {
    // Atualizar indicadores de obras
    const obrasLeftIndicator = document.querySelector('.obras-carousel .carousel-edge-indicator.left');
    const obrasRightIndicator = document.querySelector('.obras-carousel .carousel-edge-indicator.right');
    const obrasSwipeHint = document.querySelector('.obras-carousel .swipe-hint');
    
    if (obrasLeftIndicator && obrasRightIndicator && obrasSwipeHint) {
        // Mostrar indicador esquerdo se não estiver no primeiro slide
        obrasLeftIndicator.style.display = currentObraSlideIndex > 0 ? 'block' : 'none';
        
        // Mostrar indicador direito se não estiver no último slide
        obrasRightIndicator.style.display = currentObraSlideIndex < totalObraSlides - 1 ? 'block' : 'none';
        
        // Ocultar hint após primeira interação
        if (currentObraSlideIndex > 0) {
            obrasSwipeHint.style.display = 'none';
        }
    }
    
    // Atualizar indicadores de notícias
    const noticiasLeftIndicator = document.querySelector('.noticias-carousel .carousel-edge-indicator.left');
    const noticiasRightIndicator = document.querySelector('.noticias-carousel .carousel-edge-indicator.right');
    const noticiasSwipeHint = document.querySelector('.noticias-carousel .swipe-hint');
    
    if (noticiasLeftIndicator && noticiasRightIndicator && noticiasSwipeHint) {
        // Mostrar indicador esquerdo se não estiver na primeira notícia
        noticiasLeftIndicator.style.display = currentNoticiaIndex > 0 ? 'block' : 'none';
        
        // Mostrar indicador direito se não estiver na última notícia
        noticiasRightIndicator.style.display = currentNoticiaIndex < totalNoticias - 1 ? 'block' : 'none';
        
        // Ocultar hint após primeira interação
        if (currentNoticiaIndex > 0) {
            noticiasSwipeHint.style.display = 'none';
        }
    }
}
