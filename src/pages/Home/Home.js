import React from 'react';
import compLogo from '../../Logo/Logo4/vector/default-monochrome.svg';
import './Home.css';
import personimg from '../../img/man-using-laptop.jpg';
import boygirlimg from '../../img/boy-girl-fashion.jpg';
import manwomenimg from '../../img/men-women-fashion.jpg';
import babyimg from '../../img/babycare.jpeg';
import bookimg from '../../img/books.jpg';
import groceryimg from '../../img/grocery.jpg';
import householdimg from '../../img/house-hold.jpeg';
import computerimg from '../../img/computer-accessories.jpg';
import entertainmentimg from '../../img/entertainment.jpg';
import toysimg from '../../img/toys.jpg';

const Home = () => {
  return (
      <main>
        <div className='home-front'>
          <img src={compLogo} alt='CompanyLogo' className='home-front-logo'/>
        </div>
        <div className='home-discount'>
          <img alt='personimg' src={personimg} className='home-discount-img'></img>
          <h3 className='home-discount-heading'>
            Avail upto <span className='home-discount-heading-percentage'>70%</span> on branded items!!
            <p className='home-discount-heading-text'>*Terms & Conditions applied!</p>
          </h3>
        </div>

        <div className='home-category'>
          <h1 className='home-category-heading'>Choose from various categories...</h1>
          <div className='home-category-container'>
            <div className='home-category-container-card'>
              <img src={manwomenimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Men & Women Fashion</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={boygirlimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Kids Wear</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={babyimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Babycare Items</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={toysimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Toys & Games</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={bookimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Books</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={computerimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Computer & Accessories</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={entertainmentimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>TV & Projectors</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={householdimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Kitchen & Household Appliances</h3>    
            </div>
            <div className='home-category-container-card'>
              <img src={groceryimg} alt='categorypicture' className='home-category-container-card-img' />
              <h3 className='home-category-container-card-heading'>Grocery Items</h3>    
            </div>
          </div>
          <a href='/category' className='home-category-a'>Explore More</a>
        </div>

        <div className='home-features'>
          <h1 className='home-features-heading'>Why buy from us ?</h1>
          <div className='home-features-container'>            
            <div className='home-features-container-card'>
              <h3 className='home-features-container-card-heading'>
                Wide Varities of products 
              </h3>
              <p className='home-features-container-card-p'>We have more than million products and varities to choose from!</p>
            </div>
            <div className='home-features-container-card'>
              <h3 className='home-features-container-card-heading'>
                Less than 2-day Shipping
              </h3>
              <p className='home-features-container-card-p'>Our network is capable of delivering your needs in less than 2 day!!</p>
            </div>
            <div className='home-features-container-card'>
              <h3 className='home-features-container-card-heading'>
                Coupons and offers!
              </h3>
              <p className='home-features-container-card-p'>We give you offers and coupons so good, you can't refuse to!</p>
            </div>
            <div className='home-features-container-card'>
              <h3 className='home-features-container-card-heading'>
                Easy Purchase Options
              </h3>
              <p className='home-features-container-card-p'>We have multiple mode of payement including Cash On Delivery!</p>
            </div>
          </div>
        </div>
        
      </main>
    
  )
}

export default Home