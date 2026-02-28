function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  document.documentElement.style.colorScheme = 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}