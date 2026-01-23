export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  const toggleNav = () => {
    const isOpen = navMenu.classList.contains('is-open');

    if (isOpen) {
      navMenu.classList.remove('is-open');
      setTimeout(() => {
        navMenu.classList.remove('is-visible');
      }, 300);
    } else {
      navMenu.classList.add('is-visible');
      setTimeout(() => {
        navMenu.classList.add('is-open');
      }, 10);
    }
  };

  navButton.addEventListener('click', toggleNav);
  return () => navButton.removeEventListener('click', toggleNav);
}
