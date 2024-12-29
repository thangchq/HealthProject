import LogoIcon from "@/assets/logo.svg";
import InfoIcon from "@/assets/icon_info.svg";
import MemoIcon from "@/assets/icon_memo.svg";
import HideIcon from "@/assets/icon_close.svg";

import ChallengeIcon from "@/assets/icon_challenge.svg";
import styles from './styles.module.less';
import MenuIcon from "@/assets/icon_menu.svg";
import { Menu, Drawer } from 'antd';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    label: <Link to='./record'>'自分の記録'</Link>,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: '体重グラフ',
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: '目標',
  },
  {
    type: 'divider',
  },
  {
    key: '4',
    label: '選択中のコース',
  },
  {
    type: 'divider',
  },
  {
    key: '5',
    label: <Link to='./column'>'コラム一覧'</Link>,
  },
  {
    type: 'divider',
  },
  {
    key: '6',
    label: '設定',
  },
  {
    type: 'divider',
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };




  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <Link to="/">
          <img className={styles.iconLogo} src={LogoIcon} />
        </Link>
        <div className={styles.containerLeft}>
          <Link to="/record">
            <div className={styles.containerItem}>
              <img className={styles.icon} src={MemoIcon} />
              <span className={styles.textTitle}>自分の記録</span>
            </div>
          </Link>

          <div className={styles.containerItem}>
            <img className={styles.icon} src={ChallengeIcon} />
            <span className={styles.textTitle}>チャレンジ</span>
          </div>
          <div className={styles.containerItem}>
            <img className={styles.icon} src={InfoIcon} />
            <span className={styles.textTitle}>お知らせ</span>
          </div>
          <img onClick={showDrawer} className={styles.icon} src={MenuIcon} />
        </div>
        <Drawer  extra={
          <img onClick={onClose} className={styles.icon} src={HideIcon} />
        } closeIcon={false} bodyStyle={{ padding: 0 }} placement="right" className={styles.drawerContainer} onClose={onClose} open={open}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            className={styles.menu}

            items={items}
          />
        </Drawer>
      </div>
    </div>
  );
}
