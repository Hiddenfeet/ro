import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useConnectWallet } from "@web3-onboard/react";

const ModalMenu = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [{ wallet }] = useConnectWallet();

  const userData = useSelector((state) => state?.state);

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
    <div id="menu" className="modal fade p-0">
      <div className="modal-dialog dialog-animated">
        <div className="modal-content h-100">
          <div className="modal-header" data-dismiss="modal">
            Menu <i className="far fa-times-circle icon-close" />
          </div>
          <div className="menu modal-body">
            <div className="row w-100">
              <ul className="navbar-nav items mx-auto">
                <li className="nav-item">
                  <a href="https://roo.finance" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://roo.finance/projects" className="nav-link">
                    LaunchPad
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://staking.roo.finance" className="nav-link">
                    Staking V1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://v2Staking.roo.finance/" className="nav-link">
                    Staking V2
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://roofinance.netlify.app/Pesky-Kanga" className="nav-link">
                    Rebel Kanga Mint
                  </a>
                </li>
                {isAdmin && (
                  <li className="nav-item">
                    <span className="nav-link">
                      <a href="/admin">Admin</a>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;



