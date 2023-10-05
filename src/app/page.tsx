import { url } from "inspector";
'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [onClick, setOnClick] = useState(false);
  return (
    <>
      <nav className='navigation-container grid grid-cols-2'>
        <div></div>
        <div>
          <ul className='nav flex'>
            <li className='nav-item'>
              <a href='#'>HOME</a>
            </li>
            <li className='nav-item'>
              <a href='#'>MENU</a>
            </li>
            <li className='nav-item'>
              <a href='#'>GALLERY</a>
            </li>
            <li className='nav-item'>
              <a href='#'>WHAT'S ON</a>
            </li>
            <li className='nav-item'>
              <a href='#'>RESERVATION</a>
            </li>
            <li className='nav-item flex items-center'>
              <div id='nav-icon3' className={onClick?"open":" "} onClick={()=>{setOnClick((state)=>!state)}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <div className='w-100'>
          <div className='Top-Home-Container h-screen w-screen flex justify-center'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: "400px", height: "auto" }}
            />
          </div>
          <div className='container-content grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-cover bg-center' style={{ backgroundImage: "url(/home-content-1.jpeg)" }} />
            <div className='text flex flex-col justify-center items-center'>
              <div className='w-3/5'>
                <h2>Grazie Ristorante Italiano</h2>
                <p>
                  Indulge in the delicacy of our fresh Italian cuisine, skillfully prepared by our talented chefs. Our
                  menu features a variety of classic and contemporary Italian dishes, including handcrafted pasta,
                  pizzas, and mouthwatering grill & seafood specialties. Each dish at Grazie is a testament to Italy’s
                  diverse culinary heritage.
                </p>
                <p>
                  Please note that Accor Plus benefits are not available at this restaurant as it is not affiliated with
                  The Sebel hotel. Therefore Accor Plus membership cards are not accepted.
                </p>
                <a href='#'>Ristorante Menu</a>
              </div>
            </div>
          </div>
          <div className='container-content grid grid-cols-1 lg:grid-cols-2'>
            <div className='text flex flex-col justify-center items-center'>
              <div className='w-3/5'>
                <h2>Grazie Pasticceria Italiana</h2>
                <p>
                  Authentic and artisanal, we’re proud to offer an authentic Pasticceria Italian experience right here
                  in Wellington. Our skilled pastry chefs use traditional techniques and the finest ingredients to craft
                  a mouthwatering selection of freshly made breads, sourdough, pastries, sandwiches, and more.
                  Everything in our pasticceria is made freshly in-house every day by our talented team.
                </p>
                <a href='#'>PASTICCERIA MENU</a>
              </div>
            </div>
            <div className='bg-cover bg-center' style={{ backgroundImage: "url(/home-content-2.jpeg)" }} />
          </div>
          <div className='container-content grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-cover bg-center' style={{ backgroundImage: "url(/home-content-3.jpeg)" }} />
            <div className='text flex flex-col justify-center items-center'>
              <div className='w-3/5'>
                <h2>What’s On At Grazie</h2>
                <p>
                  Immerse yourself in the vibrant world of our modern Italian restaurant, where we celebrate the rich
                  culinary traditions of Italy with a contemporary twist. Keep an eye on our “What’s On” section for our
                  latest special events and upcoming promotions designed to elevate your dining experience.
                </p>
                <p>
                  Join us for daily Happy Hour, or La Felice Ora, from 4:00 PM to 5:30 PM, and and stay tuned for a
                  variety of specially curated experiences that embrace the richness of Italian culture and our passion
                  for exceptional food and drinks.
                </p>
                <p>
                  Check back often to see what’s on, and be in the know. We can’t wait to share the excitement and la
                  gioia di vivere (the joy of living) with you!
                </p>
                <a href='#'>View Event</a>
              </div>
            </div>
          </div>
          <div className='container-content grid grid-cols-1 lg:grid-cols-2 hasOverlayBottom'>
            <div className='text flex flex-col justify-center items-center'>
              <div className='w-3/5'>
                <h2>Our Story</h2>
                <p>
                  The Grazie story is one which begins with la famiglia (family) and draws inspiration from the
                  colourful flavours of Italy. Combining modern charm with the classic joys of fresh italiano cuisine,
                  the visionary team behind Grazie reimagines a contemporary yet timeless eatery – a place where anyone
                  can fall in love with artisanal Italian cuisine and so much more in the heart of Lower Hutt.
                </p>
                <a href='#'>GRAZIE STORY</a>
              </div>
            </div>
            <div className='bg-cover bg-center' style={{ backgroundImage: "url(/home-content-4.jpeg)" }} />
          </div>
          <div className='container-content grid grid-cols-1 hasOverlayTop'>
            <div className='bg-cover bg-center' style={{ backgroundImage: "url(/home-bottom.jpeg)" }} />
          </div>
          <div>
            {/* <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.1001852165023!2d168.6965931126576!3d-45.022891679245745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51de71a16d977%3A0x90785586c59f68bc!2s594%20Frankton%20Road%2C%20Queenstown%209300!5e0!3m2!1sth!2snz!4v1696477619762!5m2!1sth!2snz'
      width='100%'
      loading='lazy'
      style={{height:"40dvh"}}
    >
    </iframe> */}
          </div>
        </div>
      </main>
      <footer>
        <section className='footer-container p-24'>
          <div className='flex'>
            <Image src='/logo-footer.svg' alt='logo-footer' className='m-4' width={170} height={100} />
            <Image src='/footer-logo-sebel.svg' alt='footer-logo-sebel' className='m-4' width={100} height={100} />
          </div>
          <div className='footer-desc my-8'>
            <p className='footer-desciption'>
              Discover the authentic flavors of Italy at in the heart of Lower Hutt, Wellington. Join us for a memorable
              dining experience that celebrates Italy's rich culinary heritage and let our passion for exceptional food
              transport you to the sun-soaked shores of the Mediterranean. You can contact us directly on +64 4 568
              3939. Buon appetito!
            </p>
          </div>
          <div className='footer-menu'>
            <div>
              <ul className='grid grid-cols-1 lg:grid-cols-2'>
                <li>MENU</li>
                <li>ABOUT GRAZIE</li>
                <li>GALLERY</li>
                <li>WHAT’S ON</li>
                <li>CONTACT</li>
                <li>TERMS & CONDITIONS</li>
                <li>PRIVACY</li>
              </ul>
            </div>
          </div>
          <div className='social-media my-8'>
            <div>
              <ul className='flex'>
                <li>
                  <Image src='/icon-fb.svg' alt='icon-fb' className='m-2 social-media-icon' width={25} height={25} />
                </li>
                <li>
                  <Image src='/icon-ig.svg' alt='icon-ig' className='m-2 social-media-icon' width={25} height={25} />
                </li>
              </ul>
            </div>
          </div>
          <span className='credit'>© 2023 Website by NTPQ</span>
        </section>
      </footer>
    </>
  );
}
