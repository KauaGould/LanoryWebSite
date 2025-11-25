if (localStorage.getItem("lenory_logged") !== "true") {
  window.location.href = "login.html";
}

document.write(`
<nav>
  <div class="logo">Lenory</div>

  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="profile.html">Perfil</a>
    <a href="communities.html">Comunidades</a>
    <a href="watchparty.html">WatchParty</a>
    <a href="games.html">Games</a>
  </div>
</nav>
`);
