import checkproptypes from 'check-prop-types';
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
export const checkProps = (component, expectedprops) => {
  const propdError = checkproptypes(component.propTypes, expectedprops, 'props', component.name);
  return propdError;
}

