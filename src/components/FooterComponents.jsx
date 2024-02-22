import './css/footer.css'
import dana from '../assets/dana.png'
import bca from '../assets/bca.png'

const FooterComponents = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div>
            <h1>ElmeirStuff</h1>
            <p>Spesializes in providing high-quality, stylish products for your wardrobe</p>
          </div>
          <div>
            <h3>SHOP</h3>
            <p>All Collections</p>
            <p>Winter Edition</p>
            <p>Discount</p>
          </div>
          <div>
            <h3>COMPANY</h3>
            <p>About Us</p>
            <p>Contact</p>
            <p>Affiliates</p>
          </div>
          <div>
            <h3>SUPORT</h3>
            <p>FAQs</p>
            <p>Cookie Policy</p>
            <p>Term of Use</p>
          </div>
          <div>
            <h3>PAYMENT METHODS</h3>
            <div className="img-payment">
              <img src={bca} alt="" />
              <img src={dana} alt="" className='dana'/>
            </div>
            
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright&copy;2024 Rundweb. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
