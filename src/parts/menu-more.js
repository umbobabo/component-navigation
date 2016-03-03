import React, { PropTypes as T } from 'react';
import Balloon from '@economist/component-balloon';
import SectionsCard from '@economist/component-sections-card';

function MenuMore({ href, title, moreBalloonData }) {
  return (
    <Balloon
      dynamicPositioning={false}
      className="navigation__more navigation__main-navigation-link navigation__main-sections-card"
      showOnHover
      trigger={(
        <a href={href} className="navigation__sections-link">
          {title}
        </a>
      )}
    >
      <SectionsCard
        titles={{
          sections: 'Apps and Digital Editions',
          blogs: 'From the economist group',
        }}
        data={moreBalloonData}
      />
    </Balloon>
  );
}

MenuMore.propTypes = {
  href: T.string.isRequired,
  title: T.string.isRequired,
  moreBalloonData: SectionsCard.propTypes.data,
};

export default MenuMore;
