document.querySelectorAll('.buttons .deleteLink').forEach((del) => {
  del.addEventListener('click', async (event) => {
    event.preventDefault();
    // const description = event.target.description.href;
    // console.log(event.target);
    const delid = event.target.getAttribute('deletid');
    console.log(delid);
    const res = await fetch(`/render/basket/${delid}`, {
      method: 'DELETE',
    });
    event.target.closest('.item').remove();
  });
});