import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

  const [isOpenSlidebarVal, setisOpenSlidebarVal] = useState(false);

  return (
    <>
      <nav>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-2 navPart1'>
              <div className='catWrapper'>
                <Button className='allCatTab align-items-center' onClick={() => setisOpenSlidebarVal(!isOpenSlidebarVal)}>
                  <span className='iconMenu mr-2'><IoIosMenu /></span>
                  <span className='text'>ALL CATEGORIES</span>
                  <span className='iconAngleDown ml-2'><FaAngleDown /></span>
                </Button>

                <div className={`slidebarNav ${isOpenSlidebarVal === true ? 'open' : ''}`}>
                  <ul>
                    <li>
                      <Link to='/'><Button>Men <FaAngleRight className='ml-auto'/></Button></Link>
                      <div className='submenu'>
                        <Link to='/'><Button>Clothing</Button></Link>
                        <Link to='/'><Button>Footwear</Button></Link>
                        <Link to='/'><Button>Watches</Button></Link>
                        <Link to='/'><Button>Fragrances</Button></Link>
                        <Link to='/'><Button>Watches</Button></Link>
                        <Link to='/'><Button>Fragrances</Button></Link>
                      </div>
                    </li>
                    <li>
                      <Link to='/'><Button>Women <FaAngleRight className='ml-auto'/></Button></Link>
                      <div className='submenu'>
                        <Link to='/'><Button>Clothing</Button></Link>
                        <Link to='/'><Button>Footwear</Button></Link>
                        <Link to='/'><Button>Watches</Button></Link>
                        <Link to='/'><Button>Fragrances</Button></Link>
                        <Link to='/'><Button>Watches</Button></Link>
                        <Link to='/'><Button>Fragrances</Button></Link>
                      </div>
                    </li>
                    <li><Link to='/'><Button>Beauty</Button></Link></li>
                    <li><Link to='/'><Button>Watches</Button></Link></li>
                    <li><Link to='/'><Button>Kids</Button></Link></li>
                    <li><Link to='/'><Button>Gifts</Button></Link></li>
                    <li><Link to='/'><Button>Beauty</Button></Link></li>
                    <li><Link to='/'><Button>Watches</Button></Link></li>
                    <li><Link to='/'><Button>Kids</Button></Link></li>
                    <li><Link to='/'><Button>Gifts</Button></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-sm-10 navPart2 d-flex align-items-center'>
              <ul className='list list-inline ml-auto'>
                <li className='list-inline-item'><Link to='/'><Button>Home</Button></Link></li>
                <li className='list-inline-item'>
                  <Link to='/'><Button>Men</Button></Link>
                  <div className='submenu shadow'>
                    <Link to='/'><Button>Clothing</Button></Link>
                    <Link to='/'><Button>Footwear</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Link to='/'><Button>Women</Button></Link>
                  <div className='submenu shadow'>
                    <Link to='/'><Button>Clothing</Button></Link>
                    <Link to='/'><Button>Footwear</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Link to='/'><Button>Beauty</Button></Link>
                  <div className='submenu shadow'>
                    <Link to='/'><Button>Clothing</Button></Link>
                    <Link to='/'><Button>Footwear</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <Link to='/'><Button>Watches</Button></Link>
                  <div className='submenu shadow'>
                    <Link to='/'><Button>Clothing</Button></Link>
                    <Link to='/'><Button>Footwear</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                    <Link to='/'><Button>Watches</Button></Link>
                    <Link to='/'><Button>Fragrances</Button></Link>
                  </div>
                </li>
                <li className='list-inline-item'><Link to='/'><Button>Kids</Button></Link></li>
                <li className='list-inline-item'><Link to='/'><Button>Gifts</Button></Link></li>
                <li className='list-inline-item'><Link to='/'><Button>Blog</Button></Link></li>
                <li className='list-inline-item'><Link to='/contact'><Button>Contact</Button></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;