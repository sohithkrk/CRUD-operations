import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'


const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <App>
  </App>
  
)






































//let root=ReactDOM.createRoot(document.getElementById('root'));
//root.render("Hello")

//let name="cs world telugu"
//root.render(name)
//curly braces lo pedite variable lekka dani value vastundi 

/*root.render(
  <ul>
    <li className='test'>{name}</li>
    <li id="about">About Us</li>
  </ul>
)*/
/*let menu=(
  <ul>
    <li className='test'>{name}</li>
    <li id="about">About Us</li>
  </ul>
)*/
//parantheses not important

/*function Menu1(){
  return <div>
    <p>para1</p>
    <p>para2</p>
  </div>

}*/



  

//root.render(<Menu></Menu>) //for function render like tag
//root.render(<Menu />);

//root.render(menu)

/*convention prakaram return content ni parantheses lo rastam (<div>
    <p>para1</p>
    <p>para2</p>
    </div>)
  //<h1>Hello</h1>
  */
// this is functional component bcoz we used function to render to write code of component
//another is class component


/*
in render we can give string or variable or html like syntax

manam index.js lo rastunnam kani html lo pettede react 
virtual dom use chestundi performance increase kosam


Babel library or js file (pkg) will convert jsx concept syntax into react syntax

then react will append it

 */







































/*

react lo rase code src
rct lo diff syntax lo code rastunnam syntax ni browser ki artham ayyala 
convert cheyyalante konni librarires src lo untayi avi convert chestayi

sub folders create chesukovachu

prathi component ki js file untundi css requirement batti same name for csss file also convention
html+css+js kalipi component
html separate ga undadu content ni js lo rastam

navbar,footer --->components


index.css,js

app lo index.html load ayina taruvata manaku ye content chupinchalo 
adi index.js nundi start avutundi 

index.js -->root or main file


report webvitals   -->used tp meausre app performance

setupTESTS =--->RE lated to testing

GIT IGNORE----->  version controlsystems git,gitlab, lo pettetappudu  yeye mana code ni pettetappudu 
em pettakudadau anukuntunnamo mention cheyyali
  node_modules run cheyyalsi vachinapudu avsaram don't need to push

  library names anni package.json file lo untayi app ki em kavalo untayi


  npm-init use mana app ni file use chesukovali annapudu
  npm install command is used  so all libraries will be installed under node_modules


  live server lo pettetappudu manki avasaram file create chesi 

*/