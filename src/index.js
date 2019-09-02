//=================================basics----------------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<div>
// 					<h1>Hello</h1>
// 					<p>Hi there</p>
// 				</div>
// 				, document.getElementById('root'));




//========================exercise=================================================
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
// 				<ul>
// 					<li>list1</li>
// 					<li>list2</li>
// 					<li>list3</li>
// 				</ul>,
// 				document.getElementById("root")
// );






// ============================functional components=================================
// import React from "react";
// import ReactDOM from "react-dom";

// function ListComponent(){
// 	return(
// 		<React.Fragment>
// 			<ul>
// 				<li>list1</li>
// 				<li>list2</li>
// 				<li>list3</li>
// 			</ul>
// 			<p>This is list</p>
// 		</React.Fragment>
// 	)
// }

// ReactDOM.render(
// 				<ListComponent/>,
// 				document.getElementById("root")
// );






//============================exercise============================================
// import React from "react";
// import ReactDOM from "react-dom";

// function MyInfo(){
// 	return(
// 		<React.Fragment>
// 			<h1>Deepanshu Saini</h1>
// 			<p>This paragragh is something about me though</p>
// 			<ul>
// 				<li>1</li>
// 				<li>2</li>
// 				<li>3</li>
// 			</ul>
// 		</React.Fragment>
// 	)
// }

// ReactDOM.render(
// 				<MyInfo />,
// 				document.getElementById("root")
// );






//=========================component in separate file===============================
// import React from "react";
// import ReactDOM from "react-dom";

// import MyInfo from "./1_BasicComponent/MyInfo";

// ReactDOM.render(
// 				<MyInfo />,
// 				document.getElementById("root")
// );






//=============================Parent/child component==============================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./2_ParentChildComponent/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//=======================styling================================================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./3_StyleComponent/App"


// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//===================jsx to javascript/html====================================
// import React from "react"
// import ReactDOM from "react-dom"

// function App(){
// 	const date = new Date()
// 	const hours = date.getHours()
// 	let timeOfDay
// 	if(hours < 12){
// 		timeOfDay = "morning"
// 	}else if(hours >= 12 && hours < 17){
// 		timeOfDay = "afternoon"
// 	}else{
// 		timeOfDay = "night"
// 	}

// 	return(
// 		<h1>Good {timeOfDay}</h1>
// 	)
// }

// ReactDOM.render(<App />, document.getElementById('root'))






//====================inline style=============================================
// import React from "react"
// import ReactDOM from "react-dom"

// function App(){
// 	const date = new Date()
// 	const hours = date.getHours()
// 	let timeOfDay
// 	if(hours < 12){
// 		timeOfDay = "morning"
// 		style.fontSize = "150px"
// 	}else if(hours >= 12 && hours < 17){
// 		timeOfDay = "afternoon"
// 		style.fontSize = "50px"
// 	}else{
// 		timeOfDay = "night"
// 	}

// 	const style = {
// 		color:"green",
// 		backgroundColor:"black",
// 		fontSize: "200px"
// 	}
// 	return(
// 		<h1 style={style}>Good {timeOfDay}</h1>
// 	)
// }

// ReactDOM.render(<App />, document.getElementById('root'))






//=================props=================================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./4_Props/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//================mapping================================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./5_Mapping/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//=================class-based component============================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./6_ClassComponent/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//==================state=================================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./7_State/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//================Event Handling====================================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./8_EventHandling/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//=================State Changing=======================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./9_StateChanging/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//================conditional rendering==============================
// import React from "react"
// import ReactDOM from "react-dom"
// import App1 from "./10_ConditionalRendering/App1"

// ReactDOM.render(
// 	<App1 />,
// 	document.getElementById("root")
// )






//================API calls=================================
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./11_API/App"

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("root")
// )






//===============Forms=======================================
import React from "react"
import ReactDOM from "react-dom"
import App from './App'
// import App from "./12_Forms/App"

ReactDOM.render(
	// <App />,
	<App/>,document.getElementById("root")
)
