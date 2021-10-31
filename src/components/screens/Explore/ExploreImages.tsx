import React from 'react';
import {Box, Container} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

/*function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}*/

const itemData = [
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51493.jpeg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51492.jpeg',
        title: 'Burger',
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51491.jpeg',
        title: 'Camera',
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51489.jpeg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51488.jpeg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51487.jpeg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51486.jpeg',
        title: 'Basketball',
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51485.jpeg',
        title: 'Fern',
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51484.jpeg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51483.jpeg',
        title: 'Tomato basil',
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51482.jpeg',
        title: 'Sea star',
    },
    {
        img: 'https://glostars.blob.core.windows.net/pictures/51481.jpeg',
        title: 'Bike',
        cols: 2,
    },
];


const ExploreImages = () => {
    return (
        <React.Fragment>
            <Container>
                <Box sx={{ width: '100%', overflowX: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default ExploreImages;
