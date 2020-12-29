import React from 'react';
import './AccordionItem.scss';
import PropTypes from 'prop-types';

function AccordionItem({
  isOpen = false,
  title = 'Title',
  text = '',
  toggleCollapse,
}) {
  return (
    <div
      className={isOpen ? 'accordion-item accordion-item__selected' : 'accordion-item'}
      onClickCapture={() => toggleCollapse()}
    >
      <div className="accordion-item-title">{title}</div>
      <div className="accordion-item-content">{text}</div>
    </div>
  );
}

AccordionItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toggleCollapse: PropTypes.func.isRequired,
};
export default AccordionItem;
