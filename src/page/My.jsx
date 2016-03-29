import React from 'react'
import Header from '../component/Header.jsx'
import NavBar from '../component/NavBar.jsx'
import chunkit from '../utility/chunkit'
import padArray from '../utility/padArray'
import { fgColor1, bgColor1 } from '../style/baseCSS'
import ButtonMixin from '../component/ButtonMixin.jsx'
import Reserved from './My_sub/Reserved.jsx'
import Tickets from './My_sub/Tickets.jsx'
import Favo from './My_sub/Favo.jsx'
import Activities from './My_sub/Activities.jsx'
import Notifi from './My_sub/Notifi.jsx'
import About from './My_sub/About.jsx'

class My extends React.Component {
	constructor() {
		super();
		this.state = {
			sub_page: null
		}
	}

	componentDidMount() {
		Stickyfill.add(this.refs['stickyWrap'])
	}

	render() {
		const blocks = [
			{
				icon: 'icon-clock',
				name: '预约',
				sub_page: 'reserved'
			},
			{
				icon: 'icon-ticket',
				name: '票券',
				sub_page: 'ticket'
			},
			{
				icon: 'icon-heart-empty',
				name: '收藏',
				sub_page: 'favo'
			},
			{
				icon: '',
				name: '通知',
				sub_page: 'notifi'
			},
			{
				icon: '',
				name: '活动',
				sub_page: 'activity'
			},
			{
				icon: '',
				name: '关于',
				sub_page: 'about'
			},
		];

		const ButtonTd = ButtonMixin((props)=><td {...props}>{props.children}</td>);

		let s = {
			main: {
				paddingTop: 44,
				backgroundColor: 'white',
				//overflow: 'hidden',
				boxSizing: 'border-box'
			},
			profileWrap: {
				height: 130,
				width: '100%',
				zIndex: -1
				//float: 'left'
			},
			photo: {
				display: 'block',
				position: 'relative',
				margin: '0 auto',
				top: 30,
				height: 70,
				width: 70,
				border: '1px solid rgba(0,0,0,0.2)',
				backgroundColor: bgColor1,
				//boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)',
				borderRadius: '50%'
			},
			name: {
				display: 'none',
				textAlign: 'center',
				position: 'relative',
				top: 40,
				fontSize: '0.8em'
			},
			divLine: {
				display: 'none',
				width: '80%',
				height: 1,
				borderTop: '1px solid rgb(240,240,240)'
			},
			blocksWrap: {
				position: 'sticky',
      	top: 45,
				margin: '0 auto',
				border: `1px solid ${fgColor1}`,
				borderCollapse: 'collapse',
				backgroundColor: 'white',
				boxShadow: '0 1px 1px 1px rgba(0,0,0,0.2)',
				color: fgColor1,
				fontWeight: 'bold',
				zIndex: 1
			},
			tr: {
				border: `1px solid ${fgColor1}`
			},
			td: {
				height: 60,
				border: `1px solid ${fgColor1}`,
				textAlign: 'center',
				width: '32vw'
			},
			icon: {
				fontSize: '2em'
			},
			content: {
				marginTop: 10,
				paddingBottom: 70
			},
			stickyWrap: {
			},
			bg: {
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100vh',
				width: '100vw',
				zIndex: -5,
				backgroundColor: 'white'
			}
		}

		return (
			<div style={s.main}>
				<div style={s.bg}/>
				<Header style={{zIndex: 2}}>我的</Header>
				<NavBar />
				<div 
					style={s.profileWrap}>
					<div style={s.photo}>
					</div>
					<div style={s.name}>
						{this.props.name || "张晓明"}
					</div>
				</div>
				<div style={s.divLine}></div>
				<table 
					ref='stickyWrap'
					style={s.blocksWrap}>
					<tbody>
						{chunkit(blocks, 3).map((row, ind)=>(
							<tr
								key={ind}
								style={s.tr} >
								{padArray(row, 3).map((block, ind)=>(
									<ButtonTd
										onTouchTap={()=>this.setState({
											sub_page: block.sub_page == this.state.sub_page ? null : block.sub_page
										})}
										key={ind}
										style={s.td}>
										<div className={block.icon} style={s.icon}></div>
										{block.name}
									</ButtonTd>
									))}
							</tr>
							))}
					</tbody>
				</table>
				<div style={s.content}>
					{
						((sub_page)=>{
							switch(sub_page) {
								case 'reserved':
									return <Reserved />
								case 'ticket':
									return <Tickets />
								case 'favo':
									return <Favo />
								case 'notifi':
									return <Notifi />
								case 'activity':
									return <Activities />
								case 'about':
									return <About />
								default:
									return null;
							}
						})(this.state.sub_page)
					}
				</div>
			</div>
			);
	}
}

export default My