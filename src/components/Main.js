import '../App.css';
import restauranfood from '../images/restauranfood.jpg'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import lemonDessert from '../images/lemon dessert.jpg'
import star from '../images/star.jpg'
import resaurant from '../images/restaurant.jpg'
import restaurantChef from '../images/restaurant chef B.jpg'

function Main() {
return(
<main id='pageMain' className='container'>

    <section className='description'>

        <div className='main-content'>
            <h1>
                Little Lemon
                <br/>
                <span>chicago</span>
            </h1>
            <p>We are a family owned Mediterranean restaurant,<br/>
                focused on traditional recipes served with a modern twist</p>
            <a href=''>
                <button>Reserve a Table</button>
            </a>
        </div>
        <div className='featured'>
            <img src={restauranfood}></img>
        </div>
    </section>

    <section className='specials'>
        <div className='specialHeader'>
            <h2>
            This week specials!
            </h2>
            <a href=''>
            <button>Online Menu</button>
            </a>
        </div>
        <div className='specialBoxes'>
            <section className='specialBox'>
                <img src={greekSalad}></img>
                <div className='boxBody'>
                    <h3>Greek salad
                        <span className='price-text'>price</span>
                    </h3>
                    The famous greek salad of crispy lettuce, peppers,
                     olives and our Chicago style feta cheese,
                     garnished with crunchy garlic and rosemary croutons.
                </div>
                <button> Order</button>
            </section>
            <section className='specialBox'>
                <img src={bruchetta}></img>
                <div className='boxBody'>
                    <h3>Bruchetta
                        <span className='price-text'>price</span>
                    </h3>
                    The famous greek salad of crispy lettuce, peppers,
                     olives and our Chicago style feta cheese,
                     garnished with crunchy garlic and rosemary croutons.
                </div>
                <button> Order</button>
            </section>
            <section className='specialBox'>
                <img src={lemonDessert}></img>
                <div className='boxBody'>
                    <h3>Lemon Desert
                        <span className='price-text'>price</span>
                    </h3>
                    The famous greek salad of crispy lettuce, peppers,
                     olives and our Chicago style feta cheese,
                     garnished with crunchy garlic and rosemary croutons.
                </div>
                <button> Order</button>
            </section>
        </div>
    </section>

    <section className='testimonials'>
        <h4>Testimonials</h4>
        <div className='testimonialBox'>
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
        </div>
    </section>

    <section className='about'>
        <div className='aboutContent'>
            <h4>Little Lemon
                <br/><span>chicago</span>
            </h4>
            <p>We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='aboutImages'>
            <img id='restaurantChef' src={restaurantChef}></img>
            <img id='restaurant' src={resaurant}></img>
        </div>

    </section>
</main>

);
}
export default Main;