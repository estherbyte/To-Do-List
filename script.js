:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: #ea40a4;
  --light: #eee;
  --dark: #313154;
  --grey: #888;
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --business-glow: 0px, 0px, 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px, 0px, 4px rgba(234, 64, 164, 0.75);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}
input:not([type="radio"]):not([type="checkbox"]),
button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}
body {
  background: var(--light);
  color: var(--dark);
}
section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.greeting .title {
  display: flex;
}
.greeting .title input {
  margin-left: 0.5rem;
  flex: 1 1 0%;
  min-width: 0;
}
.greeting .title,
.greeting .title input {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 700;
}

.create-todo input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}

.create-todo .options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
}

.create-todo .options label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--business);
  box-shadow: var(--business-glow);
}

.bubble.personal {
  border-color: var(--personal);
  box-shadow: var(--personal-glow);
}

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0px;
  height: 0px;
  background-color: var(--business);
  box-shadow: var(--business-glow);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}


.bubble.personal::after {
  background-color: var(--personal);
  box-shadow: var(--personal-glow);
}

input:checked ~ .bubble::after {
    width: 10px;
    height: 10px;
    opacity: 1;
}
