import Balloon from '@economist/component-balloon';
import React from 'react';
import SectionsCard from '@economist/component-sections-card';
import { PropTypes as T } from 'react';

function MenuTopic({ href, title, sectionsCardData }) {
  return (
    <Balloon
      className="navigation__main-navigation-link navigation__main-sections-card"
      showOnHover
      trigger={(
        <a href={href} className="navigation__sections-link">
          {title}
        </a>
      )}
    >
      <div>
        <SectionsCard data={sectionsCardData} />
      </div>
    </Balloon>
  );
}

MenuTopic.propTypes = {
  href: T.string.isRequired,
  title: T.string.isRequired,
  sectionsCardData: SectionsCard.propTypes.data,
};

export default MenuTopic;
