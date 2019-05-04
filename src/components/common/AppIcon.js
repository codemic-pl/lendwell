import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../assets/SvgIcons';

const AppIcon = (props) => {
  if (props.name && svgs.viewBox[props.name]) {
    return (<SvgIcon {...props} viewBox={svgs.viewBox[props.name]} svgs={svgs.svgs} />);
  }
  return (<SvgIcon {...props} svgs={svgs.svgs} />);
};

export { AppIcon };
