import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Slider(){
    return(
        <Box
        fontSize="9xl"
        direction="flex"
        flexDirection="column"
        justifyContent="center"
        py={79}
        background="blue.500"
        >
           <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active justify-content-center " data-bs-interval="10000">
                        <img src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631514202/20201025_100813_bkuyza.jpg" class="d-block mx-auto center-block w-50 h-50 img-thumbnail shadow-lg p-3 mb-5 bg-white rounded" alt="Fernanda"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631514219/20201025_102706_jlkjbb.jpg" class="d-block mx-auto center-block w-50 h-50 img-thumbnail shadow-lg p-3 mb-5 bg-white rounded" alt=" Cangureras"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://res.cloudinary.com/dxabmmloo/image/upload/v1631518118/200544366_547434136280759_3708231657670527676_n_eprw6g.jpg" class="d-block mx-auto center-block w-50 h-50 img-thumbnail shadow-lg p-3 mb-5 bg-white rounded" alt="Dia del Padre"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </Box>

    )
}