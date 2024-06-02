function acordeon(group, all = false, classActive = 'active', itemActive = false) {
  const acordeons = document.querySelectorAll(`[data-acordeon-group=${group}]`);

  if (acordeons.length > 0) {
    acordeons.forEach((item) => {
      const btn = item.querySelector('[data-acordeon-btn]');
      btn.addEventListener('click', () => handleItemAcordion(item, all));
    });

    if (itemActive) {
      acordeons[itemActive - 1].querySelector('[data-acordeon-btn]').click();
    }
  }

  function handleItemAcordion(item, all) {
    if (all === true) {
      if (item.classList.contains(classActive)) {
        item.classList.remove(classActive);
      } else {
        acordeons.forEach((acordeon) => acordeon.classList.remove(classActive));
        item.classList.add(classActive);
      }
    } else {
      item.classList.toggle(classActive);
    }
  }
}
