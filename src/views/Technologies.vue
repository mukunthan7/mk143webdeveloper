<template>
  <main>
    <div>
      <h2>Technology</h2>
      <h3>I'm using Technology</h3>
    </div>
    <img src="../icons/ubuntu.svg" alt="logo" />
    <img src="../icons/arch.svg" alt="logo" />
    <img src="../icons/vscode.svg" alt="logo" />
    <img src="../icons/vim.svg" alt="logo" />
    <img src="../icons/github.svg" alt="logo" />
    <img src="../icons/git.svg" alt="logo" />
    <img src="../icons/powershell.svg" alt="logo" />
    <img src="../icons/tmux.svg" alt="logo" />
    <img src="../icons/nginx.svg" alt="logo" />
    <img src="../icons/firebase.svg" alt="logo" />
    <img src="../icons/apache.svg" alt="logo" />
    <img src="../icons/brave.svg" alt="logo" />
    <img src="../icons/npm.svg" alt="logo" />
    <img src="../icons/gimp.svg" alt="logo" />
    <img src="../icons/githubcopilot.svg" alt="logo" />
    <img src="../icons/figma.svg" alt="logo" />
    <img src="../icons/gitlab.svg" alt="logo" />
  </main>
</template>
<style scoped>
main {
  height: 100vh;
  background: #1e293b;
}
img {
  width: 140px;
  height: 140px;
  margin: 8px;
  background: #334155;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem;
}
img:hover {
  background: white;
  transform: scale(1.5);
  transition: 0.5s ease-in-out;
}
div {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background: #1e293b;
  margin-bottom: 1rem;
}
h2 {
  color: #ffc107;
  font-size: 2rem;
  font-family: "Indie Flower", cursive;
  font-weight: semibold;
  margin-bottom: 0.5rem;
  text-align: center;
}
h3 {
  color: #a501e6;
  font-size: 1.5rem;
  font-family: "Indie Flower", cursive;
  font-weight: semibold;
  margin-bottom: 0.5rem;
  text-align: center;
}
@media screen and (max-width: 768px) {
  main {
    height: 100vh;
    background: #1e293b;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: #1e293b;
    margin-bottom: 1rem;
  }
  h2 {
    color: #ffc107;
    font-size: 2rem;
    font-family: "Indie Flower", cursive;
    font-weight: semibold;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  h3 {
    color: #a501e6;
    font-size: 1.5rem;
    font-family: "Indie Flower", cursive;
    font-weight: semibold;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 10px;
    background: #334155;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem;
  }
}
</style>
