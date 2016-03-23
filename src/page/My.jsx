import React from 'react'
import Header from '../component/Header.jsx'
import NavBar from '../component/NavBar.jsx'
import chunkit from '../utility/chunkit'
import padArray from '../utility/padArray'
import { fgColor1, bgColor1 } from '../style/baseCSS'
import ButtonMixin from '../component/ButtonMixin.jsx'

class My extends React.Component {
	constructor() {
		super();
	}

	render() {
		const blocks = [
			{
				icon: 'icon-clock',
				name: '预约',
				href: '#'
			},
			{
				icon: 'icon-ticket',
				name: '票券',
				href: '#'
			},
			{
				icon: 'icon-heart-empty',
				name: '收藏',
				href: '#'
			},
			{
				icon: '',
				name: '通知',
				href: '#'
			},
			{
				icon: '',
				name: '活动',
				href: '#'
			},
			{
				icon: '',
				name: '关于',
				href: '#'
			},
		];

		const ButtonTd = ButtonMixin((props)=><td {...props}>{props.children}</td>);

		let s = {
			main: {
				paddingTop: 44,
				minHeight: '200vh',
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
				//width: '99%',
				margin: '0 auto',
				border: `1px solid ${fgColor1}`,
				borderCollapse: 'collapse',
				backgroundColor: 'white',
				boxShadow: '0 2px 3px 1px rgba(0,0,0,0.2)',
				color: fgColor1,
				fontWeight: 'bold',
				position: 'sticky',
      	top: 45,
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
			}
		}

		return (
			<div style={s.main}>
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
					ref={(e)=>Stickyfill.add(e)}
					style={s.blocksWrap}>
					<tbody>
						{chunkit(blocks, 3).map((row, ind)=>(
							<tr
								key={ind}
								style={s.tr} >
								{padArray(row, 3).map((block, ind)=>(
									<ButtonTd
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
			</div>
			);
	}
}

export default My