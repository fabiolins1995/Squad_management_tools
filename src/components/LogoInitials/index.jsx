/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import React from 'react';
import { FaUser, FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Icon } from './styled';

/*----------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------*/
function ExtractInitials(name) {
  if (!name) return false;

  try {
    const names = name.split(' ');
    const initiais = names.map((n) => n.substring(0, 1));

    if (initiais.length === 1) return initiais[0];

    return `${initiais[0]}${initiais[initiais.length - 1]}`;
  } catch {
    return false;
  }
}

export default function LogoInitials(props) {
  const { name, size, fontSize, effect, squad, x, y, id } = props;
  const initiais = ExtractInitials(name);

  if (initiais)
    return (
      <Icon
        id={id}
        size={size}
        fontSize={fontSize}
        effect={effect}
        squad={squad}
        x={x}
        y={y}
      >
        {initiais}
      </Icon>
    );

  if (squad)
    return (
      <Icon
        id={id}
        size={size}
        fontSize={fontSize}
        effect={effect}
        squad={squad}
        x={x}
        y={y}
        withoutName
      >
        <FaPlus />
      </Icon>
    );
  return (
    <Icon size={size} fontSize={fontSize} effect={effect}>
      <FaUser />
    </Icon>
  );
}

LogoInitials.defaultProps = {
  effect: '',
  squad: false,
  x: 0,
  y: 0,
  id: '',
};

LogoInitials.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  effect: PropTypes.string,
  squad: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
  id: PropTypes.string,
};
