// Audio helper module for sound effects and background music
const SoundManager = {
  bgMusic: null,
  clickSound: null,
  isMuted: false,

  init(musicSrc) {
    // Load muted state from localStorage
    this.isMuted = localStorage.getItem('quiz_muted') === 'true';

    // Click sound effect
    this.clickSound = new Audio('sonido.mp3');
    this.clickSound.volume = 0.6;

    // Background music setup if provided
    if (musicSrc) {
      this.bgMusic = new Audio(musicSrc);
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.3;
      if (!this.isMuted) {
        // Try playing background music on user interaction
        const playMusicOnInteract = () => {
          if (this.bgMusic && !this.isMuted) {
            this.bgMusic.play().catch(() => {});
          }
          document.removeEventListener('click', playMusicOnInteract);
          document.removeEventListener('keydown', playMusicOnInteract);
        };
        document.addEventListener('click', playMusicOnInteract);
        document.addEventListener('keydown', playMusicOnInteract);
      }
    }

    this.renderToggleButton();
  },

  playClick() {
    if (this.isMuted || !this.clickSound) return;
    try {
      this.clickSound.currentTime = 0;
      this.clickSound.play().catch(() => {});
    } catch (e) {}
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('quiz_muted', this.isMuted);

    if (this.bgMusic) {
      if (this.isMuted) {
        this.bgMusic.pause();
      } else {
        this.bgMusic.play().catch(() => {});
      }
    }

    this.updateToggleButton();
  },

  renderToggleButton() {
    if (document.getElementById('sound-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'sound-toggle-btn';
    btn.className = 'sound-toggle-btn';
    btn.setAttribute('aria-label', 'Alternar sonido');
    btn.onclick = () => this.toggleMute();
    document.body.appendChild(btn);
    this.updateToggleButton();
  },

  updateToggleButton() {
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      btn.innerHTML = this.isMuted ? '🔇' : '🔊';
      btn.title = this.isMuted ? 'Activar sonido' : 'Silenciar sonido';
    }
  }
};
