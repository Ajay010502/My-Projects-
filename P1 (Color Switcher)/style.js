document.addEventListener('DOMContentLoaded', () => {
  const colors = {
      gray: 'gray',
      greenyellow: 'greenyellow',
      skyblue: 'skyblue',
      yellow: 'yellow',
  };

  document.querySelectorAll('.color-button').forEach(button => {
      button.addEventListener('click', () => {
          const color = colors[button.id];
          document.body.style.backgroundColor = color;
      });
  });
});
