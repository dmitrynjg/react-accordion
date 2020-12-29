import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../AccordionItem/AccrodionItem';

function Accordion({ defaultOpened = 0, listData = [] }) {
  const [data, setDataAccordion] = useState(listData);

  useEffect(() => {
    setDataAccordion(
      data.map(
        (item) => (
          item.id !== defaultOpened
            ? { ...item, isOpen: false }
            : { ...item, isOpen: true }),
      ),
    );
  }, []);
  return (
    <div>
      {data.map((accodionItem) => (
        <AccordionItem
          title={accodionItem.title}
          isOpen={accodionItem.isOpen}
          text={accodionItem.text}
          key={accodionItem.id}
          toggleCollapse={() => {
            setDataAccordion(
              data.map(
                (item) => (
                  item.id !== accodionItem.id
                    ? { ...item, isOpen: false }
                    : { ...item, isOpen: !item.isOpen }),
              ),
            );
          }}
        />
      ))}
    </div>
  );
}

AccordionItem.propTypes = {
  defaultOpened: PropTypes.number.isRequired,
  listData: PropTypes.arrayOf.isRequired,
};

export default Accordion;
