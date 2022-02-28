const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/88835bcb45.js" crossorigin="anonymous"></script>
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Flipkart</title>
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  
  <body style="background-color: #F1F3F6; margin: 0%; padding: 0%;" class="">
      <div style="background-color: #2874F0;">
          <nav class="flex pt-2 pb-2 w-3/4 justify-center ml-auto mr-auto">
              <div class="mr-4">
                  <img src="flips.png" width="78px" alt="">
                  <div class="flex text-xs">
                      <h1 class="text-white mr-1" style="font-style: oblique;">Explore</h1>
                      <h1 style="color: yellow; font-style: oblique;">More</h1>
                  </div>
              </div>
              <div class="mr-6 w-1/3 bg-white flex">
                  <input type="text" class="placeholder-black w-full pt-1.5 pb-1.5 pl-1" style="outline: none;"
                      placeholder="Search">
                  <i class="fa-solid fa-magnifying-glass pt-3 pb-2"
                      style="color: #2874F0; font-size: large; padding-right: 7px;"></i>
              </div>
              <div class="ml-auto flex">
                  <button class="mr-5 bg-white pl-7 pr-7 pt-1 pb-1"
                      style="color: #2874F0; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">Login</button>
                  <div id="more" class="flex mr-4 rounded-md"
                      style="border: 2px solid white; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                      <i class="fa-solid fa-caret-down pt-2 pl-3 text-white"></i>
                      <button class="mr-5 rounded-sm pl-4 pt-1 pb-1"
                          style="background-color: #2874F0; color: white; ">More</button>
                  </div>
                  <div class="flex rounded-md"
                      style="border: 2px solid white; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                      <i class="fa-solid fa-cart-shopping pt-3 pl-3 text-white"></i>
                      <button class="mr-5 rounded-sm pl-4 pt-1 pb-1"
                          style="background-color: #2874F0; color: white;">Cart</button>
                  </div>
              </div>
          </nav>
      </div>
      <div id="main">
          <div id="main_head">
              <ul class="flex headul">
                  <li class="headlis"><img class="headimgs" src="topoffers.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="grocery.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="mobiles.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="fashion.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="elec.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="appli.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="grocery.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="mobiles.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
                  <li class="headlis"><img class="headimgs" src="elec.png" alt="">
                      <h1 class="text-center mt-3" style="font-family:Arial, Helvetica, sans-serif;">Product</h1>
                  </li>
              </ul>
          </div>
      </div>
      <div id="sec" class="flex">
          <div id="prods" class="bg-white ml-3 mr-3 mt-4 rounded-md w-4/5"
              style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="flex" style="border-bottom: .7px solid black;">
                  <div class="flex pb-7 pl-7 pt-7">
                      <h1 class="text-2xl">Deals Of the Day.</h1>
                      <h1>11:01:34</h1>
                  </div>
                  <button class="ml-auto mr-7 buti rounded-md">View all</button>
              </div>
              <div>
                  <ul class="flex mt-7 pb-7">
                      <li class="m-auto text-sm text-center"><img class="im" src="sweets.jpg" alt="">
                          <h1 class="mt-3">Best Sweetend Sweets</h1>
                          <h1 class="col">Just $129</h1>
                          <h1 class="col">Hurry! Dont Miss Out</h1>
                      </li>
                      <li class="m-auto text-sm text-center"><img class="im" src="hel.jpg" alt="">
                          <h1 class="mt-3">Very Safe Helmets</h1>
                          <h1 class="col">Min 10% + extra offer</h1>
                          <h1 class="col">Hurry! Dont Miss Out</h1>
                      </li>
                      <li class="m-auto text-sm text-center"><img class="im" src="sd.jpg" alt="">
                          <h1 class="mt-3">Best And Tasty Chips</h1>
                          <h1 class="col">Just $129</h1>
                          <h1 class="col">Hurry! Dont Miss Out</h1>
                      </li>
                      <li class="m-auto text-sm text-center"><img class="im" src="hel.jpg" alt="">
                          <h1 class="mt-3">Very Safe Helmets</h1>
                          <h1 class="col">Min 10% + extra offer</h1>
                          <h1 class="col">Hurry! Dont Miss Out</h1>
                      </li>
                      <li class="m-auto text-sm text-center"><img class="im" src="sd.jpg" alt="">
                          <h1 class="mt-3">Best And Tasty Chips</h1>
                          <h1 class="col">Just $129</h1>
                          <h1 class="col">Hurry! Dont Miss Out</h1>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="mt-4 mr-3">
              <img width="255px" src="ref.jpg" alt="">
          </div>
      </div>
      <div id="prods2" class="bg-white ml-3 mr-3 mt-4 rounded-md w-full"
          style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
          <div class="flex" style="border-bottom: .7px solid black;">
              <div class="flex pb-7 pl-7 pt-7">
                  <h1 class="text-2xl">Deals Of the Day.</h1>
                  <h1>11:01:34</h1>
              </div>
              <button class="ml-auto mr-7 buti rounded-md">View all</button>
          </div>
          <div>
              <ul class="flex mt-7 pb-7">
                  <li class="m-auto text-sm text-center"><img class="im" src="sweets.jpg" alt="">
                      <h1 class="mt-3">Best Sweetend Sweets</h1>
                      <h1 class="col">Just $129</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="hel.jpg" alt="">
                      <h1 class="mt-3">Very Safe Helmets</h1>
                      <h1 class="col">Min 10% + extra offer</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="sd.jpg" alt="">
                      <h1 class="mt-3">Best And Tasty Chips</h1>
                      <h1 class="col">Just $129</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="hel.jpg" alt="">
                      <h1 class="mt-3">Very Safe Helmets</h1>
                      <h1 class="col">Min 10% + extra offer</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="sd.jpg" alt="">
                      <h1 class="mt-3">Best And Tasty Chips</h1>
                      <h1 class="col">Just $129</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
              </ul>
          </div>
      </div>
      <div id="prods3" class="bg-white ml-3 mr-3 mt-4 rounded-md w-full"
          style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
          <div class="flex" style="border-bottom: .7px solid black;">
              <div class="flex pb-7 pl-7 pt-7">
                  <h1 class="text-2xl">Deals Of the Day.</h1>
                  <h1>11:01:34</h1>
              </div>
              <button class="ml-auto mr-7 buti rounded-md">View all</button>
          </div>
          <div>
              <ul class="flex mt-7 pb-7">
                  <li class="m-auto text-sm text-center"><img class="im" src="sweets.jpg" alt="">
                      <h1 class="mt-3">Best Sweetend Sweets</h1>
                      <h1 class="col">Just $129</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="hel.jpg" alt="">
                      <h1 class="mt-3">Very Safe Helmets</h1>
                      <h1 class="col">Min 10% + extra offer</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="sd.jpg" alt="">
                      <h1 class="mt-3">Best And Tasty Chips</h1>
                      <h1 class="col">Just $129</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="hel.jpg" alt="">
                      <h1 class="mt-3">Very Safe Helmets</h1>
                      <h1 class="col">Min 10% + extra offer</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
                  <li class="m-auto text-sm text-center"><img class="im" src="sd.jpg" alt="">
                      <h1 class="mt-3">Best And Tasty Chips</h1>
                      <h1 class="col">Just $129</h1>
                      <h1 class="col">Hurry! Dont Miss Out</h1>
                  </li>
              </ul>
          </div>
      </div>
  </body>
  <style>
      .headlis {
          margin: auto;
      }
  
      .headlis:hover {
          color: #2874F0;
      }
  
      .headimgs {
          width: 70px;
      }
  
      .headul {
          padding-top: 13px;
          padding-bottom: 13px;
      }
  
      #main {
          background-color: white;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
  
      .col {
          color: grey;
          margin-top: 7px;
      }
  
      .im {
          transition-duration: .7s;
          transition-property: inherit;
      }
  
      .im:hover {
          border-radius: 50%;
      }
  
      .buti {
          margin-top: 17px;
          margin-bottom: 17px;
          padding-left: 15px;
          padding-right: 15px;
          color: white;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          background-color: #2874F0;
          overflow: auto;
      }
  </style>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});