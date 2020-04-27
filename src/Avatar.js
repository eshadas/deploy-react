import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


class Avatar extends Component{
	constructor() {
		super();
		this.state = {
			name : "Welcome to Avatar World!!!"
		}
	}

	namechange() {
		this.setState({
			name : "Subcribe Done"
		})
	}

	render() {
		const avatarlistarray = [
		{
			id:1,
			name:"Chris",
			work:"Web Developer"
		},
		{
			id:2,
			name:"Mark",
			work:"BackEnd Developer"
		},
		{
			id:3,
			name:"Downey",
			work:"DataBase"
		},
		{
			id:4,
			name:"Tom",
			work:"FrontEnd Developer"
		}
	]

	const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
		return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
	})


		return (
		<div className="mainpage">
			<h1> {this.state.name} </h1>
				{arrayavatarcard}
				
			<div className="buttonbig tc grow">	
			<button onClick= { () => this.namechange() }> 
			
			 SUBCRIBE </button>
			</div>
		</div>
		)
	}
}


export default Avatar;