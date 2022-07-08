document.querySelector('.btnDiv').addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnBasket')) {
    const idPicture = event.target.closest('.conteinerConstructor').querySelector('.change-sock').getAttribute('picid');
    const res = await fetch(`/home/picture/${idPicture}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idPicture,
      }),
    });
    await res.json();
  }

  if (event.target.classList.contains('btnFavorites')) {
    const idPicture = event.target.closest('.conteinerConstructor').querySelector('.change-sock').getAttribute('picid');
    const res = await fetch(`/home/picture/${idPicture}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idPicture,
      }),
    });
    await res.json();
  }
});
