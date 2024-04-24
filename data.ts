export const sectionList = [
  {
    name: 'Cattleya',
    data: [
      {
        name: 'Taichung beauty',
        weight: 120,
        rating: '5.0',
        price: 39,
        isTopOfTheWeek: true,
        image: 'https://i.pinimg.com/originals/25/13/3d/25133df91301e29bcd36eec3949009ff.jpg',
        color: 'pink',
        bonus: 'a pot',
        origin: 'Taiwan',
        category: 'Cattleya'
      },
      {
        name: 'Young Min',
        weight: 150,
        rating: '4.5',
        price: 29,
        isTopOfTheWeek: false,
        image:
          'https://cdn.shopify.com/s/files/1/0382/3940/4076/products/933F6DD9-E739-4198-8C8F-E18560C4EA7B_250x250@2x.jpg',
        color: 'orange',
        bonus: 'a pot',
        origin: 'Thailand',
        category: 'Cattleya'
      },
      {
        name: 'Hawaii Wedding Songs',
        weight: 250,
        rating: '4.2',
        price: 49,
        isTopOfTheWeek: false,
        image:
          'https://cdn11.bigcommerce.com/s-r26j4fi927/images/stencil/1280x1280/products/3589/4042/C._Hawaiian_Wedding_Song_Virgin_HCC_copy__15631.1654784280.jpg',
        color: 'white',
        bonus: 'No',
        origin: 'Taiwan',
        category: 'Cattleya'
      }
    ]
  },
  {
    name: 'Dendrobium',
    data: [
      {
        name: 'Blue Spin',
        weight: 250,
        rating: '5.0',
        price: 69,
        isTopOfTheWeek: true,
        image: 'https://live.staticflickr.com/65535/48630313466_592b1989d9_b.jpg',
        color: 'pink',
        bonus: 'a thin Orchid',
        origin: 'Vietnam',
        category: 'Dendrobium'
      },
      {
        name: 'Daerei',
        weight: 300,
        rating: '4.5',
        price: 59,
        isTopOfTheWeek: false,
        image: 'https://laorchid.com/cdn/shop/products/TW6838A121022_1024x1024.jpg',
        color: 'white',
        bonus: 'a pot',
        origin: 'Thailand',
        category: 'Dendrobium'
      },
      {
        name: 'Thongchai Gold',
        weight: 350,
        rating: '4.2',
        price: 19,
        isTopOfTheWeek: false,
        image: 'https://budsnblush.com/cdn/shop/products/DendrobiumThongChaiGoldPottedOrchid.jpg',
        color: 'yellow',
        bonus: 'no',
        origin: 'Thailand',
        category: 'Dendrobium'
      }
    ]
  },
  {
    name: 'Phalaenopsis',
    data: [
      {
        name: 'White lady',
        weight: 200,
        rating: '5.0',
        price: 299,
        isTopOfTheWeek: true,
        image:
          'https://res.cloudinary.com/ufn/image/upload/c_pad,f_auto,fl_progressive,h_500,w_445/mkxrvxkdaboxn6xjq5f4.jpg',
        color: 'white',
        bonus: 'a big pot',
        origin: 'Taiwan',
        category: 'Phalaenopsis'
      },
      {
        name: 'Pink secret',
        weight: 500,
        rating: '4.5',
        price: 199,
        isTopOfTheWeek: false,
        image: 'https://i.pinimg.com/originals/75/08/24/7508245c78cfe5bd288d5608b4d11e62.jpg',
        color: 'pink',
        bonus: 'no',
        origin: 'Taiwan',
        category: 'Phalaenopsis'
      },
      {
        name: 'Yellow Moth',
        weight: 150,
        rating: '4.2',
        price: 99,
        isTopOfTheWeek: false,
        image: 'https://theplantladysf.com/cdn/shop/products/image_3d172f07-c919-4acb-99be-55d83a722716.jpg',
        color: 'Yellow',
        bonus: 'Small orchid',
        origin: 'Vietnam',
        category: 'Phalaenopsis'
      }
    ]
  }
]
export interface IOrchid {
  name: string
  weight: number
  rating: string
  price: number
  isTopOfTheWeek: boolean
  image: string
  color: string
  bonus: string
  origin: string
  category: string
}

export const categories = ['Cattleya', 'Dendrobium', 'Phalaenopsis']

export const data: IOrchid[] = [
  {
    name: 'Taichung beauty',
    weight: 120,
    rating: '5.0',
    price: 39,
    isTopOfTheWeek: true,
    image: 'https://i.pinimg.com/originals/25/13/3d/25133df91301e29bcd36eec3949009ff.jpg',
    color: 'pink',
    bonus: 'a pot',
    origin: 'Taiwan',
    category: 'Cattleya'
  },
  {
    name: 'Young Min',
    weight: 150,
    rating: '4.5',
    price: 29,
    isTopOfTheWeek: false,
    image:
      'https://cdn.shopify.com/s/files/1/0382/3940/4076/products/933F6DD9-E739-4198-8C8F-E18560C4EA7B_250x250@2x.jpg',
    color: 'orange',
    bonus: 'a pot',
    origin: 'Thailand',
    category: 'Cattleya'
  },
  {
    name: 'Hawaii Wedding Songs',
    weight: 250,
    rating: '4.2',
    price: 49,
    isTopOfTheWeek: false,
    image:
      'https://cdn11.bigcommerce.com/s-r26j4fi927/images/stencil/1280x1280/products/3589/4042/C._Hawaiian_Wedding_Song_Virgin_HCC_copy__15631.1654784280.jpg',
    color: 'white',
    bonus: 'No',
    origin: 'Taiwan',
    category: 'Cattleya'
  },
  {
    name: 'Blue Spin',
    weight: 250,
    rating: '5.0',
    price: 69,
    isTopOfTheWeek: true,
    image: 'https://live.staticflickr.com/65535/48630313466_592b1989d9_b.jpg',
    color: 'pink',
    bonus: 'a thin Orchid',
    origin: 'Vietnam',
    category: 'Dendrobium'
  },
  {
    name: 'Daerei',
    weight: 300,
    rating: '4.5',
    price: 59,
    isTopOfTheWeek: false,
    image: 'https://laorchid.com/cdn/shop/products/TW6838A121022_1024x1024.jpg',
    color: 'white',
    bonus: 'a pot',
    origin: 'Thailand',
    category: 'Dendrobium'
  },
  {
    name: 'Thongchai Gold',
    weight: 350,
    rating: '4.2',
    price: 19,
    isTopOfTheWeek: false,
    image: 'https://budsnblush.com/cdn/shop/products/DendrobiumThongChaiGoldPottedOrchid.jpg',
    color: 'yellow',
    bonus: 'no',
    origin: 'Thailand',
    category: 'Dendrobium'
  },
  {
    name: 'White lady',
    weight: 200,
    rating: '5.0',
    price: 299,
    isTopOfTheWeek: true,
    image:
      'https://res.cloudinary.com/ufn/image/upload/c_pad,f_auto,fl_progressive,h_500,w_445/mkxrvxkdaboxn6xjq5f4.jpg',
    color: 'white',
    bonus: 'a big pot',
    origin: 'Taiwan',
    category: 'Phalaenopsis'
  },
  {
    name: 'Pink secret',
    weight: 500,
    rating: '4.5',
    price: 199,
    isTopOfTheWeek: false,
    image: 'https://i.pinimg.com/originals/75/08/24/7508245c78cfe5bd288d5608b4d11e62.jpg',
    color: 'pink',
    bonus: 'no',
    origin: 'Taiwan',
    category: 'Phalaenopsis'
  },
  {
    name: 'Yellow Moth',
    weight: 150,
    rating: '4.2',
    price: 99,
    isTopOfTheWeek: false,
    image: 'https://theplantladysf.com/cdn/shop/products/image_3d172f07-c919-4acb-99be-55d83a722716.jpg',
    color: 'Yellow',
    bonus: 'Small orchid',
    origin: 'Vietnam',
    category: 'Phalaenopsis'
  }
]
