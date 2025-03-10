
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cb-dark text-white pt-12 pb-6">
      <div className="cb-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/8491c047-d089-4ccb-9662-84da916131ba.png"
                alt="ChromeBookItalia"
                className="h-8"
              />
              <span className="font-bold text-xl">
                <span className="text-cb-green">Chrome</span>
                <span className="text-cb-red">BookItalia</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Il tuo portale italiano dedicato a ChromeBook, ChromeOS, Android e
              Chrome. News, guide, recensioni e forum.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-cb-green">
              Categorie
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/news/chromebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ChromeBook
                </Link>
              </li>
              <li>
                <Link
                  to="/news/chromeos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ChromeOS
                </Link>
              </li>
              <li>
                <Link
                  to="/news/android"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Android
                </Link>
              </li>
              <li>
                <Link
                  to="/news/chrome"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chrome
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-cb-red">Link Utili</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/forum"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ChatBot
                </Link>
              </li>
              <li>
                <Link
                  to="/chi-siamo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  to="/contatti"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contatti
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} ChromeBookItalia. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
