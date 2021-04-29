

const menu = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: "https://cafedelites.com/wp-content/uploads/2018/12/Buttermilk-Pancakes-RECIPE-IMAGE-169.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: 'https://i.pinimg.com/originals/7e/b6/5c/7eb65cfbd741a103450e63ace973bc1b.jpg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: 'https://i.pinimg.com/originals/b6/73/16/b67316a051a0f91283b21a89829f0d32.jpg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCmbg0_X6YPwJaO3EauTMwu5VnYoSLu_BljQdiiI_fepU1eJEh7K5hEslrjZQmyBLTCw&usqp=CAU',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sns-fb-ig-ad-oreo-1080x1080-14-1-1566573506.png',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLr5bOnyG94ySkbVA1LXiSi3bSix78Yzjm7w&usqp=CAU',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaT5XSQIMjr94wLVUtdNj-mI6nq1B1qb-Baw&usqp=CAU',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: 'data:image/jpeg;base64,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',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  export default menu;
  