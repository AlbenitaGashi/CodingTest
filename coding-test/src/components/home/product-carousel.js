import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProdottiService from '../../services/prodotti-service';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Compare, Favorite, RemoveRedEye, ShoppingCart } from '@mui/icons-material';


function ProductCarousel() {
    const [prodotti, setProdotti] = useState([]);
    useEffect(() => {
        ProdottiService.getProdotti().then((res) => {
            console.log(res.data);
            setProdotti(res.data)
        })
    }, [])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
        >
            {prodotti.map((prodotto) => {
                return (
                    <Card sx={{ maxWidth: 200 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="150"
                            image={require("../../assets/" + prodotto.image)}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {prodotto.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {prodotto.descrizione}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {prodotto.costo} €
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="delete">
                                <Favorite />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <RemoveRedEye />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <ShoppingCart />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <Compare />
                            </IconButton>
                        </CardActions>
                    </Card>
                )
            })}
        </Carousel>
    )
}

export default ProductCarousel

