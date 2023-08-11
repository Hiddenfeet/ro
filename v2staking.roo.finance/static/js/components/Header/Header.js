import React, {useEffect, useState} from 'react';
import {useConnectWallet} from '@web3-onboard/react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Wallet} from '../../onboard/onboard';
import ModalMenu from '../Modal/ModalMenu';
const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [{wallet, connecting}, connect, disconnect] = useConnectWallet();

  const userData = useSelector((state) => state?.state);

  // useEffect(() => {
  //   console.log("userData", userData);
  // }, [userData]);

  useEffect(() => {
    if (wallet) {
      if (
        wallet?.accounts[0]?.address.toLowerCase() ==
          '0xbba8732ee7c9e61bc05af01006785d0d6cd2471e'.toLowerCase() ||
        wallet?.accounts[0]?.address.toLowerCase() ==
          '0x6bb81ca8ec2f7ccbb08a5b1df8c32781ef3e1c2d'.toLowerCase()
      ) {
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
    }
  }, [wallet]);

  return (
    <>
      <header id="header">
        {/* Navbar */}
        <nav
          data-aos="zoom-out"
          data-aos-delay={800}
          className="navbar gameon-navbar navbar-expand"
        >
          <div className="container header">
            {/* Logo */}
            <Link to="https://roo.finance" className="navbar-brand">
              <img src="\img/Roo.png" alt="Roo Finance" />
            </Link>
            <div className="ml-auto" />
            {/* Navbar Nav */}
            <ul className="navbar-nav items mx-auto">
              <li className="nav-item">
                <a href="https://roo.finance" className="nav-link">
                  Home{' '}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="https://roo.finance/projects" className="nav-link">
                  LaunchPad
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="stakingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Staking
                </a>
                <ul className="dropdown-menu" aria-labelledby="stakingDropdown">
                  <li>
                    <Link
                      to="https://Staking.Roo.Finance"
                      className="dropdown-item dropdown-item-black"
                    >
                      V1 Staking
                    </Link>
                  </li>
                  <li>
                    <a
                      href='https://v2Staking.Roo.Finance'
                      className='dropdown-item dropdown-item-black'
                    >
                      V2 Staking
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="https://roofinance.netlify.app/Pesky-Kanga"
                  className="nav-link"
                >
                  Rebel Kanga Mint
                </a>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to={'/admin'}>Admin</Link>
                  </span>
                </li>
              )}
            </ul>

            {/* <ul className="navbar-nav icons">
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#search"
                >
                  <i className="icon-magnifier" />
                </Link>
              </li>
            </ul> */}
            <ul className="navbar-nav toggle">
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#menu"
                >
                  <i className="icon-menu m-0" />
                </Link>
              </li>
            </ul>
            {/* {isAdmin && (
              <ul className="navbar-nav toggle">
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to={"/admin"}>Admin</Link>
                  </span>
                </li>
              </ul>
            )} */}
            {/* Navbar Action Button */}
            <ul className="navbar-nav action">
              <Wallet />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
