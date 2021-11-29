import React from 'react';
import styles from './SelectableListItem.module.scss';

export interface SelectableListItemProps{
  text: string, isSelected: boolean, onSelect:() => void
}

const SelectableListItem: React.FC<SelectableListItemProps> = ({
  text,
  isSelected = false,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect();
  };
  return <li className={isSelected ? styles.selected : ''}><button type="button" onClick={handleClick}>{text}</button></li>;
};

export default SelectableListItem;
