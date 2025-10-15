import './footer.css'
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved | Developed by <span className="font-semibold">Rochdi Fridhi</span>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  