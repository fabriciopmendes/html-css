/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict
const dropdownContents = document.querySelectorAll('.dropdown-content');

dropdownContents.forEach((dropdownContent) => {
  const dropbtn = dropdownContent.previousElementSibling;

  dropdownContent.addEventListener('mouseover', () => {
    const dropbtnAfter = dropbtn.querySelector('::after');
    dropbtnAfter.style.transform = 'rotate(90deg)';
  });

  dropdownContent.addEventListener('mouseout', () => {
    const dropbtnAfter = dropbtn.querySelector('::after');
    dropbtnAfter.style.transform = '';
  });
}); */
