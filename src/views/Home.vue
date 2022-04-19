<template>
  <main>
    <img class="profile" src="../assets/Profile.jpg" alt="logo" />
    <h1 id="welcome">Hi, I'm <span>M.Mukunthan</span></h1>
    <h4>
      A passionate Full Stack Web Developer and Cyber Security having an
      experience of building Web applications with JavaScript / Reactjs / Nodejs
      / MySQL / Docker / Linux / Git and some other
    </h4>
    <a
      v-on:click="
        {
          {
            Github();
          }
        }
      "
      className="topContent_git"
    >
      Github Profile
    </a>
    <a
      v-on:click="
        {
          {
            Projects();
          }
        }
      "
      className="topContent_pro"
    >
      Projects
    </a>
  </main>
</template>
<script>
export default {
  name: "Home",
  methods: {
    Github() {
      window.open("https://github.com/mukunthan7");
    },
    Projects() {
      window.open("https://github.com/mukunthan7?tab=repositories");
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #1e293b;
}
.profile {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 8px solid #8e45ac;
  margin: 20px;
  animation: profile 2s ease-in-out infinite;
}
@keyframes profile {
  0% {
    border: 8px solid #8e45ac;
  }
  25% {
    border: 8px solid yellow;
  }
  50% {
    border: 8px solid yellowgreen;
  }
  75% {
    border: 8px solid palegoldenrod;
  }
  100% {
    border: 8px solid #8e45ac;
  }
}
h1 {
  color: #ffc107;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  margin-bottom: 1rem;
}
span {
  color: #a501e6;
  font-family: "Indie Flower", cursive;
  font-size: 3rem;
}
h4 {
  color: #ffc107;
  font-size: 2rem;
  font-family: "Indie Flower", cursive;
  font-weight: semibold;
  margin-bottom: 0.5rem;
  text-align: center;
}
.topContent_git {
  text-decoration: none;
  color: #ffc107;
  background-color: transparent;
  font-size: 14px;
  font-family: "Indie Flower", cursive;
  padding: 10px 30px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  animation: button 2s ease-in-out infinite;
  border: 5px solid #ffc107;
}
@keyframes button {
  0% {
    border: 6px solid #8e45ac;
  }
  25% {
    border: 6px solid yellow;
  }
  50% {
    border: 6px solid yellowgreen;
  }
  75% {
    border: 6px solid palegoldenrod;
  }
  100% {
    border: 6px solid #8e45ac;
  }
}
.topContent_git:hover {
  background-color: white;
  color: black;
  font-family: "Indie Flower", cursive;
  font-weight: bold;
  transform: scale(1.1);
  cursor: none;
}
.topContent_pro {
  text-decoration: none;
  color: #ffc107;
  border: 5px solid #ffc107;
  background-color: transparent;
  font-size: 14px;
  font-family: "Indie Flower", cursive;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  animation: button 2s ease-in-out infinite;
}
.topContent_pro:hover {
  background-color: white;
  color: black;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  transform: scale(1.1);
  cursor: none;
}
@media screen and (max-width: 1024px) {
  .profile {
    width: 170px;
    height: 170px;
  }
  h1 {
    font-size: 2rem;
  }
  span {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  .topContent_git {
    font-size: 12px;
    padding: 10px 20px;
  }
  .topContent_pro {
    font-size: 12px;
    padding: 10px 20px;
  }
  .topContent_git:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    transform: scale(1.1);
    cursor: none;
  }
  .topContent_pro:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    transform: scale(1.1);
    cursor: none;
  }
}

@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
  }
  .profile {
    width: 150px;
    height: 150px;
  }
  h1 {
    font-size: 1.5rem;
  }
  span {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 0.8rem;
  }
  .topContent_git {
    font-size: 10px;
    padding: 10px 15px;
  }
  .topContent_pro {
    font-size: 10px;
    padding: 10px 15px;
  }
  .topContent_git:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    transform: scale(1.1);
  }
  .topContent_pro:hover {
    background-color: white;
    color: black;
    font-weight: bold;
    transform: scale(1.1);
  }
}
</style>
