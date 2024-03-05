import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/gallery/gallery-image.png"
export const GalleryImages = () => {
  return (
    <div class="gallery-section">
      <div class="container d-flex justify-content-center mt-5 ">
        <div class="row">
          <div class="col-md-4">
            <button class="rounded-pill btn btn-primary text-dark" alt="...">All photos</button>
          </div>
          <div class="col-md-4">
            <button class="rounded-pill btn btn-primary text-dark" alt="...">Vives Office</button>
          </div>
          <div class="col-md-4">
            <button class="rounded-pill btn btn-primary text-dark" alt="...">Products</button>
          </div>
        </div>



      </div>

      <div className=" container">
        <div class="col-md-12 d-none d-md-block">
          <div class="row">
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>

          </div>   
             <div class="row">
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>

          </div>   
             <div class="row">
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>

          </div>      
          <div class="row">
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>

          </div>     
           <div class="row">
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>
            <div class="col-md-3"><img src={image} /></div>

          </div>
        </div>
      </div>
      <div className="container">

        <hr className="mt-5"></hr>
        <div>
          <div className="d-flex justify-content-between">
            <h3>
              <FontAwesomeIcon icon={faCircleArrowLeft} style={{ "--fa-primary-color": "#351ee0", "--fa-secondary-color": "#f9f9f9", }} />
              Previous
            </h3>
            <h3>
              Next
              <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "#351ee0", }} />
            </h3>
          </div>
          <hr className="mb-5"></hr>
        </div>
      </div>


    </div>


  );
};