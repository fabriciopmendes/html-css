const dropdownContainer = document.querySelectorAll('.dropdown');

dropdownContainer.forEach(container => {
  const dropbtn = container.querySelector('.dropbtn');
  const dropdownContent = container.querySelector('.dropdown-content');
  const seta = container.querySelector('.seta')

  dropbtn.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
    seta.style.transform = 'translateY(-180%) rotate(180deg)';
  });

  dropbtn.addEventListener('mouseout', () => {
    dropdownContent.style.display = 'none';
    seta.style.transform = '';
  });
});

