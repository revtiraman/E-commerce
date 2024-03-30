

const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icons">
                    <img src='./public/amazon.png' alt='amazon-logo'/>
                    <img src='./public/flipkart.png' alt='flipkart-logo'/>
                </div>
            </div>
            <div className="hero-image">
                <img src='./public/shoe_image.png' alt='shoe-img'/>
            </div>
        </main>
    );
};

export default HeroSection;
