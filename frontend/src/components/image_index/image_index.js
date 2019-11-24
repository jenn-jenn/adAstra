import React from 'react';
import ImageItem from './image_item';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageIndex extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        debugger
        this.props.fetchPostImages(this.props.post._id)
            // .then( () => {
            //     var slideIndex = 1;
            //     showSlides(slideIndex);

            //     // Next/previous controls
            //     function plusSlides(n) {
            //         showSlides(slideIndex += n);
            //     }

            //     // Thumbnail image controls
            //     function currentSlide(n) {
            //         showSlides(slideIndex = n);
            //     }

            //     function showSlides(n) {
            //         var i;
            //         var slides = document.getElementsByClassName("mySlides");
            //         if (n > slides.length) { slideIndex = 1 }
            //         if (n < 1) { slideIndex = slides.length }
            //         for (i = 0; i < slides.length; i++) {
            //             slides[i].style.display = "none";
            //         }

            //         slides[slideIndex - 1].style.display = "block";
            //     }
            // })

    } 
    render() {
        debugger
        if(this.props.images.length === 0){
            return null
        }

        return (
            <div className="images">
                {/* <div className="slideshow-container"> */}
                    {/* <div className="slides"> */}
                    {this.props.images.map((img) => (
                        <ImageItem img={img} />
                    ))}
                    {/* </div> */}
                    {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a> */}
                    {/* <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
                {/* </div> */}
            </div>
        )

        // return(
        //     <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
        //         {this.props.images.map((img) => (
        //             <ImageItem img={img} />
        //         ))}
        //     </Carousel>

        // )
    }
}





export default ImageIndex;