import Balloon from '@economist/component-balloon';
import React from 'react';
import SectionsCard from '@economist/component-sections-card';
import { PropTypes as T } from 'react';

function MenuTopic({ href, title, sectionsCardData }) {
  return (
    <Balloon
      className="navigation__main-sections-card navigation__main-navigation--desktop"
      showOnHover
      trigger={(
        <a href={href} className="navigation__sections-link navigation__main-navigation-link">
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
