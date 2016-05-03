import React from 'react/addons';
const { testUtils } = React.addons;

function renderShallow(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export { renderShallow };