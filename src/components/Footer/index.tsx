import React, { useState } from 'react';
import { useIntl } from 'react-intl';

// import { useNavigate } from 'react-router-dom';

// import { LanguageButtons } from '../../uikit/LanguageButton';

import {
  AddressBook,
  Cadillac,
  CallList,
  Facebook,
  GitHub,
  GMail,
  Instagram,
  Linkedin,
  Skype,
  Telegram,
} from '../Icons';

import { FooterInfoData } from './FooterInfoData';

import { PersonalInfoBlockData } from '../InfoBlocks/PersonalInfoBlock/PersonalInfoBlockData';

import styles from './Footer.module.css';

export const Footer = () => {
  const [footerContent, setFooterContent] = useState(FooterInfoData);

  const intl = useIntl();
  // const navigate = useNavigate();
  // const handleOnClick = navigate('/');

  return (
    <div className={styles.footer} id="footer">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.container_data}>
            <div className={styles.logo} id="logo">
              <a className={styles.link} href="/">
                <Cadillac />
              </a>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contacts_callList}>
                <CallList />
                <div className={styles.contacts_callList_value}>
                  {PersonalInfoBlockData.apps}
                </div>
              </div>
              <div className={styles.contacts_addressBook}>
                <AddressBook />
                <div className={styles.contacts_addressBook_value}>
                  {PersonalInfoBlockData.address}
                </div>
              </div>
            </div>
            <div className={styles.apps_container}>
              {footerContent.map((app, index) => (
                <div className={styles.apps_item} key={index}>
                  <div className={styles.apps}>
                    <a href={app.link}>{app.logo}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.container_copyRight}>
            <p className={styles.container_copyRight_text}>
              © Aliaksei Zhurauliou, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
