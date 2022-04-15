<template>
  <main>
    <div>
      <h2>Skills</h2>
      <h3>I'm using Programming Language</h3>
    </div>
    <img src="../icons/html.svg" alt="logo" />
    <img src="../icons/css.svg" alt="logo" />
    <img src="../icons/javascript.svg" alt="logo" />
    <img src="../icons/react.svg" alt="logo" />
    <img src="../icons/nodejs.svg" alt="logo" />
    <img src="../icons/mysql.svg" alt="logo" />
    <img src="../icons/docker.svg" alt="logo" />
    <img src="../icons/linux.svg" alt="logo" />
    <img src="../icons/postgresql.svg" alt="logo" />
    <img src="../icons/c.svg" alt="logo" />
    <img src="../icons/c++.svg" alt="logo" />
    <img src="../icons/java.svg" alt="logo" />
    <img src="../icons/python.svg" alt="logo" />
    <img src="../icons/sass.svg" alt="logo" />
    <img src="../icons/vuejs.svg" alt="logo" />
    <img src="../icons/tailwindcss.svg" alt="logo" />
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
  margin: 10px;
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
