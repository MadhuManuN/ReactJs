import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import load from './loading.jpg'
import useFetch from './useFetch'
import Navbar from './Navbar'


function Home() {

    useEffect(()=>{
        if(localStorage.getItem("cart")==null)
        {
            localStorage.setItem("cart", "[]")
        }
    },[])

    let {data : products,error}=useFetch("http://localhost:4000/products");
    
    return (
        <div>
                <Navbar/>
            {error && <h2>{error}</h2>}
            { products && <div><Products products={products} title={"ALL PRODUCTS"} />
            <Products products={products.filter((product) => { return (product.color == "black") })} title={"BLACK T-Shirts "} />
            <Products products={products.filter((product) => { return (product.rating == "5") })} title={"Ratings above 5 "} />
            <Products products={products.filter((product) => { return (product.mrp >= "1000") })} title={"Mrp Above Rs1000 "} /></div>}


        </div>
    )
}

export default Home

// [
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/8/x/6/xl-jc22-rn-3-4th-black-wht-dangerous-jump-cuts-original-imagh3qzbbaz8sw9.jpeg?q=50",
//         brand: "Jump Cuts",
//         discription: "Printed Men Round Neck White, Black T-Shirt",
//         discountprice: "₹309",
//         mrp: "1,399",
//         color: "black",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "3.0",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/9/e/d/l-jc22-rn-hs-black-wht-fortune-jump-cuts-original-imagg9r5zs3anzkz.jpeg?q=50",
//         brand: "Jump Cuts ",
//         discription: "Printed, Typography Men Round Neck White, Black T-Shirt",
//         discountprice: "₹309",
//         mrp: "1,399",
//         color: "black",
//         fabric: "flannel",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/x/j/5/xs-bwtrnful-z55-blive-original-imaggvyuc8emdn9g.jpeg?q=50",
//         brand: "BLIVE ",
//         discription: "Printed Men Round Neck White T-Shirt",
//         discountprice: "₹209",
//         mrp: "1,599",
//         color: "white",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "3",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/kyxb9u80/t-shirt/k/n/y/xl-t67-nbwh-eyebogler-original-imagbfyc3rkzaj2y.jpeg?q=50",
//         brand: "EyeBogler ",
//         discription: "Striped Men Round Neck Blue T-Shirt",
//         discountprice: "₹219",
//         mrp: "1,299",
//         color: "blue",
//         fabric: "spandex",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "3.0",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
//         brand: "HELMONT ",
//         discription: "Color Block Men Hooded Neck Red, Black T-Shirt",
//         discountprice: "₹217",
//         mrp: "999",
//         color: "black",
//         fabric: "polyster",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "2.5",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/l4zxn680/t-shirt/d/f/z/s-bylrnful-z55-blive-original-imagfrxcjcw3n52r.jpeg?q=50",
//         brand: "BLIVE ",
//         discription: "Printed Men Round Neck Yellow T-Shirt",
//         discountprice: "₹269",
//         mrp: "1,999",
//         color: "yellow",
//         fabric: "nylon",
//         productType: "jacket",
//         usage: "male",

//         rating: "4.5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/l41n2q80/t-shirt/k/x/j/l-1jgrf-013-blk-jugular-original-imagff7w8tfwd2dr.jpeg?q=50",
//         brand: "JUGULAR ",
//         discription: "Printed Men Round Neck Black T-Shirt",
//         discountprice: "₹289",
//         mrp: "888",
//         color: "black",
//         fabric: "nylon",
//         productType: "jacket",
//         usage: "male",

//         rating: "4.5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         productpic: "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/q/2/i/m-s-r-b-w-farbot-original-imagjuxy9kn5qyam.jpeg?q=50",
//         brand: "FARBOT",
//         discription: "Color Block Men Round Neck Black T-Shirt",
//         discountprice: " ₹179",
//         mrp: "1,999",
//         color: "black",
//         fabric: "nylon",
//         productType: "jacket",
//         usage: "male",

//         rating: "4.5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 1,
//         productpic:
//             "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/4/h/w/xxl-mens-jkt-009-black-candy-house-original-imafg4hz7xz6pjpr.jpeg?q=70&quot",
//         brand: "Christy World",
//         description: "Full Sleeve Solid Men Padded Jacket",
//         discountPrise: "₹649",
//         mrp: "2,999",
//         color: "black",
//         fabric: "nylon",
//         productType: "jacket",
//         usage: "male",

//         rating: "4.5",
//         siz: ["s", "m", "l", "xl"]
//     },

//     {
//         id: 2,
//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/xif0q/jacket/c/f/0/s-mnt-7003-montrez-original-imagffv4hs3k6quc-bb.jpeg?q=50&quot",
//         brand: "MONTREZ",
//         description: "Full Sleeve Solid Men Denim Jacket",
//         discountPrise: "₹599",
//         mrp: "2,499",
//         color: "blue",
//         fabric: "denim",
//         productType: "jacket",
//         usage: "male",

//         rating: "4.0",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 3,
//         productpic:
//             "https://rukminim1.flixcart.com/image/832/832/ke0a7ww0/jacket/c/x/r/m-wjjk3119-wrogn-original-imafurzguaqhztpq.jpeg?q=70&quot",
//         brand: "WROGN",
//         description: "Full Sleeve Solid Men Bomber Jacket",
//         discountPrise: "₹2,199",
//         mrp: "3,999",
//         color: "brown",
//         fabric: "canvas",
//         productType: "coat",
//         usage: "male",

//         rating: "3.8",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 4,

//         productpic:
//             "https://rukminim1.flixcart.com/image/832/832/k0zlsi80/jacket/m/h/j/l-mens-jkt-009-mrn-candy-house-original-imafg4hzyjzfffq2.jpeg?q=70&quot",
//         brand: "Christy World",
//         description: "Full Sleeve Solid Men Padded Jacket",
//         discountPrise: "₹649",
//         mrp: "2,999",
//         color: "red",
//         fabric: "nylon",
//         productType: "jacket",
//         usage: "male",

//         rating: "4.7",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 5,

//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/kdnf98w0hlty2aw-0/jacket/2/u/g/m-1-aw18-zip-jacket-black-way-maniac-original-imafumytf7zgd6dz.jpeg?q=50&quot",
//         brand: "Christy World",
//         description: "Full Sleeve Solid Men Padded Jacket",
//         discountPrise: "₹649",
//         mrp: "2,999",
//         color: "black",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "3.0",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 6,

//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/kz5vwy80/jacket/b/n/1/l-no-of130006-124-furo-original-imagb8gutzcvfgkr.jpeg?q=50&quot",
//         brand: "Furo",
//         description: "Full Sleeve Solid Men Sports Jacke",
//         discountPrise: "₹1,360",
//         mrp: "3,399",
//         color: "green",
//         fabric: "cotton",
//         productType: "hoodie",
//         usage: "male",

//         rating: "4.0",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 7,

//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/kg2l47k0/jacket/f/v/k/xl-aw18-zip-jacket-yellow-way-maniac-original-imafwdg3hqaykzga.jpeg?q=50&quot",
//         brand: "MANIAC",
//         description: "Full Sleeve Colorblock Men Bomber Jacket ",
//         discountPrise: "₹429",
//         mrp: "2,019",
//         color: "yellow",
//         fabric: "cotton",
//         productType: "hoodie",
//         usage: "male",

//         rating: "4.0",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 8,

//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/xif0q/t-shirt/2/u/3/l-mens-t-d2-brucella-original-imaghyzyty4ugeyg.jpeg?q=50&quot",
//         brand: "Brucella",
//         description: "Printed Men Round Neck Grey T-Shirt",
//         discountPrise: "₹299",
//         mrp: "1,299",
//         color: "ash",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "4.9",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 9,

//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/l41n2q80/t-shirt/q/n/j/l-1jgrf-013-blk-jugular-original-imagff7wfjvxtdjb.jpeg?q=50&quot",
//         brand: "JUGULAR",
//         description: "Printed Men Round Neck Black T-Shirt",
//         discountPrise: "₹289",
//         mrp: "888",
//         color: "Black",
//         fabric: "crepe",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "5",
//         siz: ["s", "m", "l", "xl"]

//     },
//     {
//         id: 10,
//         productpic:
//             "https://rukminim1.flixcart.com/image/495/594/kq9ta4w0/t-shirt/o/t/d/s-723-6-ftx-original-imag4bhzkshdkr68.jpeg?q=50&quot",
//         brand: "FTX ",
//         description: "Solid Men Round Neck Blue T-Shirt",
//         discountPrise: "₹199",
//         mrp: "599",
//         color: "blue",
//         fabric: "polyster",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "2.5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 11,
//         productpic: "https://rukminim1.flixcart.com/image/580/696/xif0q/t-shirt/m/w/a/m-bylrnful-z56-blive-original-imaggnwhufnbx6h6.jpeg?q=50&quot",
//         brand: "BLIVE",
//         description: "Printed Men Round Neck Yellow T-Shirt",
//         discountPrise: "$217",
//         mrp: "999",
//         color: "yellow",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "3",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 12,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50&quot",
//         brand: "Urbano Plus ",
//         description: "Solid Men Henley Neck Dark Blue T-Shirt",
//         discountPrise: "$517",
//         mrp: "1999",
//         color: "black",
//         fabric: "cotton",
//         productType: "hoodie",
//         usage: "male",

//         rating: "3.8",
//         siz: ["s", "m", "l", "xl"]
//     },

//     {
//         id: 13,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/xif0q/sweatshirt/z/q/7/xxl-222056461-1-monte-carlo-original-imaggbz8t6phwgtz.jpeg?q=50&quot",
//         brand: "MONTE CARLO",
//         description: "Full Sleeve Printed Men Sweatshirt",
//         discountPrise: "₹117",
//         mrp: "1399",
//         color: "red",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "3.3",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 14,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/kw104nk0/sweatshirt/u/n/d/xxl-udsws0063-u-s-polo-assn-original-imag8sekzaaqgxrj.jpeg?q=50&quot",
//         brand: "U.S. POLO ASSN.",
//         description: "Full Sleeve Graphic Print Me",
//         discountPrise: "₹117",
//         mrp: "999",
//         color: "black",
//         fabric: "georgette",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "4.7",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 15,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/ksj9dow0/sweatshirt/d/r/s/m-maw21ss012b-metronaut-original-imag62rzhz5zyuze.jpeg?q=50&quot",
//         brand: "METRONAUT",
//         description: "Full Sleeve Graphic Print M",
//         discountPrise: "₹317",
//         mrp: "3399",
//         color: "green",
//         fabric: "cotton",
//         productType: "t-shirt",
//         usage: "male",

//         rating: "4.0",
//         siz: ["s", "m", "l", "xl"]
//     },

//     {
//         id: 16,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/kzegk280/t-shirt/2/t/a/xs-t51-bl-eyebogler-original-imagbf5tcgxyyyhp.jpeg?q=50&quot",
//         brand: "HELMONT ",
//         description: "Color Block Men Hooded Neck Red, Black T-Shirt",
//         discountPrise: "$317",
//         mrp: "399",
//         color: "black",
//         fabric: "flannel",
//         productType: "shirt",
//         usage: "male",
//         rating: "4.9",
//         siz: ["s", "m", "l", "xl"]
//     },

//     {
//         id: 17,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/o/j/o/6-12-months-kids-dungree-navy-blue-6-12-krijal-original-imagge9na4kgnsyy.jpeg?q=50&quot",
//         brand: "The Silk Shop ",
//         description: "Boys Casual Shirt Dungaree",
//         discountPrise: "$317",
//         mrp: "1298",
//         color: "white",
//         fabric: "lenin",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 18,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/t/n/y/9-10-years-brighteye-blk-namma-ooru-trend-original-imaggsfanw2f8bk8.jpeg?q=50&quot",
//         brand: "NAMMA OORU TREND ",
//         description: "Boys Casual T-shirt Pant",
//         discountPrise: "$317",
//         mrp: "399",
//         color: "black",
//         fabric: "cotton",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "4.0",
//         siz: ["s", "m", "l", "xl"]
//     },

//     {
//         id: 19,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/l55nekw0/kids-apparel-combo/n/y/3/6-7-years-3pc-sm-munif-dresses-original-imagfw8zrpba6vrk.jpeg?q=50&quot",
//         brand: "SM MUNIF DRESSES",
//         description: "Girls Party(Festive) Top Pant, Shrug",
//         discountPrise: "$317",
//         mrp: "399",
//         color: "pinck",
//         fabric: "crepe",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 20,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/l1qrjbk0/kids-apparel-combo/9/i/d/2-3-years-197-mustard-kidzarea-original-imagd8u6hvhsdtxt.jpeg?q=50&quot",
//         brand: "Kidzarea",
//         description: "Boys Casual Blazer Jean",
//         discountPrise: "$317",
//         mrp: "399",
//         color: "yellow",
//         fabric: "denim",
//         productType: "kidsWear",
//         usage: "kids",
//         rating: "4.0",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 21,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/krjjde80/kids-apparel-combo/8/n/h/18-24-months-racing-chatni-skii-original-imag5b6zdcmmzqsj.jpeg?q=50&quot",
//         brand: "SKII ",
//         description: "Boys Casual T-shirt Dungaree",
//         discountPrise: "$317",
//         mrp: "399",
//         color: "white yellow",
//         fabric: "lenin",
//         productType: "kidsWear",

//         usage: "kids3.6",
//         rating: "",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 22,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/l0lbrm80/kids-apparel-combo/x/l/5/12-13-years-3pc-325-new-makhi-check-zolario-original-imagccdeghncztuy.jpeg?q=50&quot",
//         brand: "Zolario",
//         description: "Boys Party(Festive) Waistco",
//         discountPrise: "$317",
//         mrp: "399",
//         color: "grey",
//         fabric: "flannel",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 23,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/keg02a80/kids-apparel-combo/u/w/s/6-12-months-boys-202-20-boom-boys-original-imafv4ufspwaccm2.jpeg?q=50&quot",
//         brand: "Boom Boys",
//         Ddescription: "Boys Casual Shirt Pant, Cap",
//         discountPrise: "₹555",
//         mrp: "999",
//         color: "olive green",
//         fabric: "nylon",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "5",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 24,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/l5bd5zk0/kids-apparel-combo/6/q/q/4-5-years-t-hf11-rust-alphabets-mars-infiniti-original-imaggypcw9ksnznh.jpeg?q=50&quot",
//         brand: "Mars Infiniti ",
//         description: "Boys Casual T-shirt Shorts",
//         iscountPrise: "₹717",
//         mrp: "445",
//         color: "blue",
//         fabric: "spandex",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "3.0",
//         siz: ["s", "m", "l", "xl"]
//     },
//     {
//         id: 25,

//         productpic: "https://rukminim1.flixcart.com/image/580/696/xif0q/kids-apparel-combo/y/l/3/2-3-years-gmw-dungaree01-smartbazar-original-imaggzjwmcddxfhk.jpeg?q=50&quot",
//         brand: "smartbazar",
//         description: "Girls Party(Festive) Shirt Dungaree, Top, Belt",
//         discountPrise: "₹177",
//         mrp: "299",
//         color: "red white",
//         fabric: "lenin",
//         productType: "kidsWear",

//         usage: "kids",
//         rating: "4.8",
//         siz: ["s", "m", "l", "xl"]
//     },

// ]
// async function getdata(){
//     try{
//         let {data} = await axios.get(`http://localhost:4000/products`)
//     setProducts(data)
//     console.log(data);
//     }
//     catch(err) {
//             console.log(err);
//         }
// }
// getdata()