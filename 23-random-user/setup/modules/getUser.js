const url = "https://randomuser.me/api";
const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // destructure
  const person = data.results[0];

  const { phone, email } = person;
  const { first, last } = person.name;
  const { age } = person.dob;
  const { password } = person.login;
  const { large: img } = person.picture;
  const {
    street: { name, number },
  } = person.location;

  return {
    phone,
    email,
    age,
    password,
    image: img,
    street: `${number} ${name}}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
