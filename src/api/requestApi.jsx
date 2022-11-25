const url = 'https://api-staging.takyon.io/dashboard/auth/login';

const login = async (email, password) => {
  const data = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json());
  return data;
};

export default login;
