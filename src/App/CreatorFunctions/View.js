const View = {
  render: (AppElement, rootId) => {
    const root = document.getElementById(rootId);
    root.appendChild(AppElement);
  },
};

export default View;
