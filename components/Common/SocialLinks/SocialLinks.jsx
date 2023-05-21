import React from 'react'
import { SocialLink, SocialList } from './SocialLinks.styled';

import { socialLinks } from '@helper/socialLinks';

const SocialLinks = () => {
  return (
    <>
      <SocialList>
        {socialLinks.map(({ link, icon: Icon }) => (
          <li key={`${link} `}>
            <SocialLink href={link}>
              <Icon color="#556390" />
            </SocialLink>
          </li>
        ))}
      </SocialList>
    </>
  );
}

export default SocialLinks
