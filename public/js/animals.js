const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#animal-name').value.trim();
  const description = document.querySelector('#animal-description').value.trim();
  const image_url  = document.querySelector('#animal-image').value.trim();
  const coordinates = document.querySelector('#animal-coordinates').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  if (name && description && image_url && coordinates) {
    const response = await fetch(`/api/animals`, {
      method: 'POST',
      body: JSON.stringify({ name,description, image_url, coordinates }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/animal');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('#new-animal-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
