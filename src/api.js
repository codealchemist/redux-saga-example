export const loadUsers = () =>
  fetch('https://swapi.co/api/people/').then(response => response.json())
