import React from "react";

const FOOTER_ITEMS = {
  SHOP_AND_LEARN: {
    title: "Shop and Learn",
    items: [
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "TV",
      "Music",
      "AirPods",
      "HomePod",
      "iPod touch",
      "Accessories",
      "Gift Cards",
    ],
  },
  APPLE_WALLET: {
    title: "Apple Wallet",
    items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  ACCOUNT: {
    title: "Account",
    items: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  ENTERTAIMENT: {
    title: "Entertainment",
    items: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  APPLE_STORE: {
    title: "Apple Store",
    items: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  BUSINESS: {
    title: "For Business",
    items: ["Apple and Business", "Shop for Business"],
  },
  EDUCATION: {
    title: "Education",
    items: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  HEALTHCARE: {
    title: "For Healthcare",
    items: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  GOVERNMENT: {
    title: "For Government",
    items: ["Shop for Government", "Shop for Veterans and Military"],
  },
  VALUES: {
    title: "Apple Values",
    items: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
  },
  ABOUT_APPLE: {
    title: "About Apple",
    items: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
};

function FooterMain() {
  return (
    <div className="footerMain pl-4 pr-4 lg:pl-0 lg:pr-0">
      <div className="footerMain__wrapper grid-cols-3 sm:grid-cols-5">
        <div className="footer__col">
          <div className="footer__colTitle">Shop and Learn</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.SHOP_AND_LEARN.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__colTitle">Apple Wallet</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.APPLE_WALLET.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">Account</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.ACCOUNT.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__colTitle">Entertainment</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.ENTERTAIMENT.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">Apple Store</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.APPLE_STORE.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">For Business</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.BUSINESS.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__colTitle">For Education</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.EDUCATION.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__colTitle">For Healthcare</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.HEALTHCARE.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__colTitle">For Government</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.GOVERNMENT.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__colTitle">Apple Values</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.VALUES.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__colTitle">About Apple</div>
          <ul className="footer__list">
            {FOOTER_ITEMS.ABOUT_APPLE.items.map((item, idx) => (
              <li key={idx} className="footer__listItem">
                <a href="/" className="footer__listLink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__legal">
        <div className="footer__legalLeft sm:flex-row">
          <div className="footer__text footer__text--copyright">
            Copyright © 2024 Apple Inc. All rights reserved.
          </div>
          <div className="footer__legalRight">
            <span className="footer__text">United States</span>
          </div>
        </div>
      </div>
      <div className="footer__legalLinks mb-4">
        <ul className="footer__legalList w-full">
          <li className="footer__legalItem">
            <a href="/" className="footer__legalLink">
              Privacy Policy
            </a>
          </li>
          <li className="footer__legalItem">
            <a href="/" className="footer__legalLink">
              Terms of Use
            </a>
          </li>
          <li className="footer__legalItem">
            <a href="/" className="footer__legalLink">
              Sales and Refunds
            </a>
          </li>
          <li className="footer__legalItem">
            <a href="/" className="footer__legalLink">
              Legal
            </a>
          </li>
          <li className="footer__legalItem">
            <a href="/" className="footer__legalLink">
              Site Map
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMain;
