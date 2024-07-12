import { Link } from "react-router-dom";

const Footer = () => {

  const footerLinks = [
    {
      heading: "Our Company",
      links: [
        { text: "About Us", to: "#about-us" },
        { text: "Our Team", to: "#our-team" },
        { text: "Contact Us", to: "#contact-us" },
      ],
    },
    {
      heading: "Useful Links",
      links: [
        { text: "CUstomer Stories", to: "#product-1" },
        { text: "Customer Enquiry", to: "#product-2" },
        { text: "Testimonials", to: "#product-3" },
        { text: "Buyer FAQs", to: "#product-3" },
      ],
    },
    {
      heading: "Show by Room",
      links: [
        { text: "Living Room", to: "#livingRoom" },
        { text: "Bedroom", to: "#bedroom" },
        { text: "Dining Room", to: "#diningRoom" },
      ],
    },
    {
      heading: "Partners",
      links: [
        { text: "Become a Franchise", to: "#becomeFranchise" },
        { text: "Sell with us", to: "#sellWithUs" },
        { text: "Design Partner", to: "#designPartner" },
        { text: "Design Services", to: "#designServices" },
      ],
    },
    {
      heading: "Need",
      links: [
        { text: "Become a Franchise", to: "#becomeFranchise" },
        { text: "Sell with us", to: "#sellWithUs" },
        { text: "Design Partner", to: "#designPartner" },
        { text: "Design Services", to: "#designServices" },
      ],
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer__wrapper">
        {footerLinks.map((linkGroup, index) => (
          <article className="footer-link" key={index}>
            <header>
              <h2>{linkGroup.heading}</h2>
            </header>
            <ul>
              {linkGroup.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={link.to} onClick={handleScrollToTop}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </footer>
  );
};

export default Footer;