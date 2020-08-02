window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("topbar").classList.remove("hidden");
  } else {
    document.getElementById("topbar").classList.add("hidden");
  }
};
