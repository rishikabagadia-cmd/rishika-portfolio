/**
 * MODAL & FULLSCREEN CASE STUDY VIEWER
 */
import { projects } from './projects-data.js';

let currentProjectIndex = -1;
let currentMediaIndex = 0;
let filteredProjects = [...projects];

export function setFilteredProjects(list) {
  filteredProjects = list;
}

export function openModal(projectId) {
  const index = filteredProjects.findIndex(p => p.id === projectId);
  if (index === -1) return;
  
  currentProjectIndex = index;
  currentMediaIndex = 0;
  renderModalContent();
  
  const modal = document.getElementById('project-modal');
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  
  // Set URL hash for direct link sharing
  window.history.replaceState(null, '', `#project-${projectId}`);
}

export function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  
  // Pause any playing videos
  const video = modal.querySelector('video');
  if (video) {
    video.pause();
  }
  
  // Clear hash
  window.history.replaceState(null, '', window.location.pathname);
}

export function nextProject() {
  if (filteredProjects.length === 0) return;
  currentProjectIndex = (currentProjectIndex + 1) % filteredProjects.length;
  currentMediaIndex = 0;
  renderModalContent();
}

export function prevProject() {
  if (filteredProjects.length === 0) return;
  currentProjectIndex = (currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
  currentMediaIndex = 0;
  renderModalContent();
}

function renderModalContent() {
  const project = filteredProjects[currentProjectIndex];
  if (!project) return;
  
  const modal = document.getElementById('project-modal');
  
  // Header information
  document.getElementById('modal-category').textContent = project.categoryLabel || project.category;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-client').textContent = project.client;
  document.getElementById('modal-year').textContent = project.year;
  document.getElementById('modal-summary').textContent = project.summary;
  document.getElementById('modal-desc').textContent = project.description;
  
  // Counter
  document.getElementById('modal-index-counter').textContent = `${currentProjectIndex + 1} / ${filteredProjects.length}`;
  
  // Deliverables
  const deliverablesEl = document.getElementById('modal-deliverables');
  deliverablesEl.innerHTML = '';
  (project.deliverables || []).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    deliverablesEl.appendChild(li);
  });
  
  // Tools
  const toolsEl = document.getElementById('modal-tools');
  toolsEl.innerHTML = '';
  (project.tools || []).forEach(tool => {
    const span = document.createElement('span');
    span.className = 'tool-pill';
    span.textContent = tool;
    toolsEl.appendChild(span);
  });
  
  // Main Media Showcase
  renderMediaGallery(project);
}

function renderMediaGallery(project) {
  const mediaContainer = document.getElementById('modal-media-viewport');
  mediaContainer.innerHTML = '';
  
  const mediaList = project.media && project.media.length > 0 ? project.media : [
    project.mediaType === 'video' 
      ? { type: 'video', src: project.videoSrc, caption: project.title }
      : { type: 'image', src: project.coverImage, caption: project.title }
  ];
  
  const currentItem = mediaList[currentMediaIndex] || mediaList[0];
  
  if (currentItem.type === 'video') {
    const videoWrap = document.createElement('div');
    videoWrap.className = 'modal-video-wrap';
    videoWrap.innerHTML = `
      <video controls autoplay loop playsinline class="modal-video-player">
        <source src="${currentItem.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      ${currentItem.caption ? `<p class="media-caption">${currentItem.caption}</p>` : ''}
    `;
    mediaContainer.appendChild(videoWrap);
  } else if (currentItem.type === 'vimeo') {
    const videoWrap = document.createElement('div');
    videoWrap.className = 'modal-video-wrap';
    const match = currentItem.src.match(/vimeo\.com\/(\d+)/);
    const vimeoId = match ? match[1] : currentItem.src;
    videoWrap.innerHTML = `
      <iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" 
              class="modal-video-player" 
              style="width: 100%; height: 100%; border: none;"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowfullscreen>
      </iframe>
      ${currentItem.caption ? `<p class="media-caption">${currentItem.caption}</p>` : ''}
    `;
    mediaContainer.appendChild(videoWrap);
  } else if (currentItem.type === 'gdrive') {
    const videoWrap = document.createElement('div');
    videoWrap.className = 'modal-video-wrap';
    videoWrap.innerHTML = `
      <iframe src="https://drive.google.com/file/d/${currentItem.src}/preview" 
              class="modal-video-player" 
              style="width: 100%; height: 100%; border: none;"
              allow="autoplay; fullscreen" 
              allowfullscreen>
      </iframe>
      ${currentItem.caption ? `<p class="media-caption">${currentItem.caption}</p>` : ''}
    `;
    mediaContainer.appendChild(videoWrap);
  } else {
    const imgWrap = document.createElement('div');
    imgWrap.className = 'modal-image-wrap';
    imgWrap.innerHTML = `
      <img src="${currentItem.src}" alt="${project.title}" class="modal-main-img" loading="eager">
      ${currentItem.caption ? `<p class="media-caption">${currentItem.caption}</p>` : ''}
    `;
    mediaContainer.appendChild(imgWrap);
  }
  
  // Thumbnails bar if multiple media
  const thumbsContainer = document.getElementById('modal-thumbnails');
  thumbsContainer.innerHTML = '';
  
  if (mediaList.length > 1) {
    thumbsContainer.style.display = 'flex';
    mediaList.forEach((m, idx) => {
      const thumb = document.createElement('button');
      thumb.className = `thumb-btn ${idx === currentMediaIndex ? 'active' : ''}`;
      thumb.setAttribute('aria-label', `View slide ${idx + 1}`);
      
      if (m.type === 'video' || m.type === 'vimeo' || m.type === 'gdrive') {
        thumb.innerHTML = `<span>▶ Video</span>`;
      } else {
        thumb.innerHTML = `<img src="${m.src}" alt="Thumb ${idx + 1}">`;
      }
      
      thumb.addEventListener('click', () => {
        currentMediaIndex = idx;
        renderMediaGallery(project);
      });
      thumbsContainer.appendChild(thumb);
    });
  } else {
    thumbsContainer.style.display = 'none';
  }
}

export function initModalListeners() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const backdrop = modal.querySelector('.modal-backdrop');
  
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);
  nextBtn?.addEventListener('click', nextProject);
  prevBtn?.addEventListener('click', prevProject);
  
  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextProject();
    } else if (e.key === 'ArrowLeft') {
      prevProject();
    }
  });
  
  // Check hash on load
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const id = hash.replace('#project-', '');
    setTimeout(() => openModal(id), 200);
  }
}
