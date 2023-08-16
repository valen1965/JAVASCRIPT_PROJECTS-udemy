import getElement from "./modules/getElement.js";
import getUser from "./modules/getUser.js";
import displayUser from "./modules/displayuser.js";

const btn = getElement(".btn");

const showUser = async () => {
  // get user from API
  const person = await getUser();

  // display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
