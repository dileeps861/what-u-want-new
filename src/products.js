const descP1 =[{attribute:	'Type'	,
value:	'Round Neck'	},
{attribute:	'Sleeve'	,
value:	'Short Sleeve'	},
{attribute:	'Fit'	,
value:	'Regular'	},
{attribute:	'Fabric'	,
value:	'Pure Cotton'	},
{attribute:	'Pack of'	,
value:	'1'	},
{attribute:	'Neck Type'	,
value:	'Round Neck'	},
{attribute:	'Ideal For'	,
value:	'Men'}];
const p1={
    name:"Graphic Print Men Round Neck Green T-Shirt",
    price: 799,
    images:[
        {src:"resources/levis/xl-16960-0420-levi-s-original-imafu66cgdkxk8rz.jpeg", alt:"T-Shirt Front"},
        {src:"resources/levis/xl-16960-0420-levi-s-original-imafu66dvzyxdbzq.jpeg", alt:"T-Shirt Back"},
        {src:"resources/levis/xl-16960-0420-levi-s-original-imafu66dxhjmz36v.jpeg", alt:"T-Shirt Side"}
    ],
    sizes:[
       "S", "M", "L"
    ],
    colors:[
       "green", "white"
    ],
    brand:"Levi's",
    sku:"rnd-neck-shirt-levis-1",
    desc:descP1
}
const descP2 =[{attribute:	'Type Round Neck ',
value:	'SleeveShort Sleeve '},
{attribute:	'Fit',
value:	'Regular '},
{attribute:	'Fabric',
value:	'Cotton Viscose Blend '},
{attribute:	'Pack of',
value:	'1 '},
{attribute:	'Neck Type',
value:	'Round Neck '},
{attribute:	'Ideal For',
value:	'Men '},
{attribute:	'Pattern',
value:	'Sporty '},
{attribute:	'Suitable For',
value:	'Western Wear'}];
const p2={
    name:"Sporty Men Round Neck White T-Shirt",
    price:1999,
    images:[
        {src:"resources/adidas/m-du0441-adidas-original-imafgzt9uyyyzvsc.jpeg", alt:"T-Shirt Front"},
        {src:"resources/adidas/m-du0441-adidas-original-imafgzt9ycby7bgx.jpeg", alt:"T-Shirt Back"},
        {src:"resources/adidas/m-du0441-adidas-original-imafgzt95geqch4f.jpeg", alt:"T-Shirt Side"}
    ],
    sizes:[
       "S", "M"
    ],
    colors:[
       "green", "white"
    ],
    brand:"ADIDAS",
    sku:"rnd-neck-shirt-levis-2",
    desc:descP2}

const descP3 =[{attribute:	'Type',	
value:	'Henley Neck'},	
{attribute:	'Sleeve'	,
value:	'Full Sleeve'},	
{attribute:	'Fit'	,
value:	'Regular'},	
{attribute:	'Fabric'	,
value:	'Pure Cotton'},	
{attribute:	'Pack of',
value:	1},	
{attribute:	'Neck Type',
value:	'Henley Neck'},	
{attribute:	'Ideal For',
value:	'Men'}];
const p3={
    name:"Self Design Men Henley Neck Blue T-Shirt",
    price: 699,
    images:[
        {src:"resources/wrangler/m-w32999242404-wrangler-original-imafjavcbaqygnkj.jpeg", alt:"T-Shirt Front"},
        {src:"resources/wrangler/m-w32999242404-wrangler-original-imafjavcgkm9wpmv.jpeg", alt:"T-Shirt Back"},
        {src:"resources/wrangler/m-w32999242404-wrangler-original-imafjavcw6nbys3p.jpeg", alt:"T-Shirt Side"}
    ],
    sizes:[
       "S"
    ],
    colors:[
       "blue"
    ],
    brand:"Wrangler",
    sku:"rnd-neck-shirt-levis-3",
    desc:descP3
}

export const products= [p1,p2, p3]