import React, { FC, ReactNode } from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

type IHeaderProps = {
  children: ReactNode;
};

const Header: FC<IHeaderProps> = ({ children }) => (
  <>
    <nav>
      <Link to="/">Start</Link>
      <Link to="/about">About</Link>
    </nav>
    <h1 className={styles.heading}>{children}</h1>
  </>
);

export default Header;
