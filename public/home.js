const btnContainer = document.querySelector('.blockBtn');
btnContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btnLink')) {
    event.preventDefault();
    const res = await fetch('/constructor/color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        color: event.target.dataset.color,
      }),
    });
    const { url } = await res.json();
    document.querySelector('.change-sock').setAttribute('src', `${url}`);
  }

  if (event.target.classList.contains('btnLinkPic')) {
    event.preventDefault();
    const res = await fetch('/constructor/picture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.dataset.name,
      }),
    });
    const { url } = await res.json();
    document.querySelector('.change-sock').setAttribute('src', `${url}`);
  }
});
