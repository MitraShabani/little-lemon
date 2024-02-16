import '../App.css';
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import lemonDessert from '../images/lemon dessert.jpg'
import star from '../images/star.jpg'
import resaurant from '../images/restaurant.jpg'
import restaurantChef from '../images/restaurant chef B.jpg'

function Main() {
return(
<main id='pageMain' className='container'>

<section className='specials'>
<h2>
This week specials!
</h2>
<button>Online Menu</button>
<section className='box'>
<img src={greekSalad}></img>
    <h3>Greek salad
        <span className='price-text'>price</span>
    </h3>
    description
</section>
<section className='box'>
<img src={bruchetta}></img>
    <h3>Bruchetta
        <span className='price-text'>price</span>
    </h3>
    description
    </section>
<section className='box'>
<img src={lemonDessert}></img>
    <h3>Lemon Desert
        <span className='price-text'>price</span>
    </h3>
    description
</section>
</section>

<section className='testimonials'>
<h4>Testimonials</h4>
<section>
    <img src={star} width={15}></img>
    <img src={greekSalad}></img>
    <span>Name</span>
    <p>Review</p>
</section>
<section>
    <img src={star} width={15}></img>
    <img src={greekSalad}></img>
    <span>Name</span>
    <p>Review</p>
</section>
<section>
    <img src={star} width={15}></img>
    <img src={greekSalad}></img>
    <span>Name</span>
    <p>Review</p>
</section>
<section>
    <img src={star} width={15}></img>
    <img src={greekSalad}></img>
    <span>Name</span>
    <p>Review</p>
</section>

</section>

<section className='about'>
    <h4>Little Lemon
        <br/><span>chicago</span></h4>
    <img id='restaurant' src={resaurant}></img>
    <img id='restaurantChef' src={restaurantChef}></img>
    <p>About description</p>
</section>
</main>

);
}
export default Main;