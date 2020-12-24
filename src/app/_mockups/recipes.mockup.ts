import { Recipe }            from '@app/_models/recipe';

export const RECIPES: Recipe[] = [
    { 
        id: 1, 
        author_id: 1,
        author: 'Anca E Voicu',
        title: 'Ciorba de fasole galbena', 
        description: 'Pentru ca este sezonul legumelor proaspete de tot felul, am ales sa pregatesc o ciorba de fasole galbena cu dovlecel', 
        category: 'Ciorbe si Supe',
        time: '45 min', 
        difficulty: 'Medie', 
        portions: 4,
        cover_image: 'test-image.jpg',
        votes: 15,
        comments: 5,
        views: 200,
        rating: 3
    },
    { 
        id: 2, 
        author_id: 3,
        author: 'ArteneR',
        title: 'Pulpe de rata cu ciuperci brune si vin Marsala', 
        description: 'Se tapeteaza cu un servet de bucatarie absorband pulpele de rata ca sa se elimine excesul de apa, deoarece altfel se vor inmuia.', 
        category: 'Fripturi',
        time: '60 min', 
        difficulty: 'Usor', 
        portions: 5,
        cover_image: 'test-image-horizontal.jpg',
        votes: 1,
        comments: 0,
        views: 134,
        rating: 5
    },
    { 
        id: 3, 
        author_id: 2,
        author: 'katharina61',
        title: 'Aripioare prajite',
        description: 'Pentru ca este sezonul legumelor proaspete de tot felul, am ales sa pregatesc o ciorba de fasole galbena cu dovlecel. Se tapeteaza cu un servet de bucatarie absorband pulpele de rata ca sa se elimine excesul de apa, deoarece altfel se vor inmuia.', 
        category: 'Ciorbe si Supe',
        time: '30 min', 
        difficulty: 'Greu', 
        portions: 8,
        cover_image: 'test-image-vertical.jpg',
        votes: 0,
        comments: 1,
        views: 17,
        rating: 0
    }
];