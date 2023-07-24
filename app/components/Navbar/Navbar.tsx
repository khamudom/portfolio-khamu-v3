import React from 'react';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import styles from './Navbar.module.css';

const navigationItems = [
  {
    id: 0,
    title: 'Intro',
    href: '/',
  },
  {
    id: 1,
    title: 'Projects',
    href: '/#projects',
  },
  {
    id: 2,
    title: 'Contact',
    href: '/#contact',
  },
];

const accountLinks = [
  {
    id: 0,
    title: 'Github',
    href: 'https://github.com/khamudom',
    icon: <AiOutlineGithub />,
  },
  {
    id: 1,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khamudom/',
    icon: <AiOutlineLinkedin />,
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <img className={styles.logo} src="/images/kulogo.png" alt="logo" />
        </Link>
        <div>Kham Udom</div>
      </div>

      {/** Desktop Navigation */}
      <div className={styles.navLinks}>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={styles.link}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.accounts}>
        {accountLinks.map((item) => (
          <Link
            className={styles.icon}
            href={item.href}
            key={item.id}
            target="_blank"
          >
            {item.icon}
          </Link>
        ))}
        {/* <FiMail /> */}
        {/* <RxHamburgerMenu className={styles.hamburger} /> */}
      </div>

      {/** Mobile Navigation */}
      {/* <div className="flex">
        <Image
          src="/assets/images/logo.svg"
          alt="profile"
          width={37}
          height={37}
          className="rounded-full"
          onClick={() => setToggleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (
          <div className="dropdown">
            <Link
              href={'/profile'}
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link
              href={'/create-prompt'}
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Create Prompt
            </Link>
            <button
              type="button"
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className="black_btn mt-5 w-full"
            >
              Sign Out
            </button>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
