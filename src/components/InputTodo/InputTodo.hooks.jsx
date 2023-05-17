export const checkInput = inputText => {
  const trimmed = inputText.trim();
  if (!trimmed) {
    // eslint-disable-next-line no-alert
    return alert('Please write something');
  }

  const newItem = { title: trimmed };
  return newItem;
};
