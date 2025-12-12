export async function login(email: string, password: string) {
  const response = await fetch('http://localhost:8080/login/', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  return response;
}

export async function checkAuthentication() {
  const response = await fetch('http://localhost:8080/login/', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}
