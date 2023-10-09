import renderer, { act } from 'react-test-renderer';
import Home from '../Home';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Home page="http://www.facebook.com">Facebook</Home>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    if (tree.props && typeof tree.props.onMouseEnter === 'function') {
      tree.props.onMouseEnter();
    }
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    if (tree.props && typeof tree.props.onMouseLeave === 'function') {
      tree.props.onMouseLeave();
    }
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

