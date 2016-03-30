import React from 'react'
import { mockEvent } from '../../mockData'
import ProgressEventEntry from '../../component/ProgressEventEntry.jsx'
const events = [mockEvent, mockEvent, mockEvent, mockEvent, mockEvent, mockEvent, mockEvent];

const Reserved = () => {
	return (
		<div>
			{
				events.map((e, ind)=>(
					<ProgressEventEntry 
						key={ind}
						event={e} />
					))
			}
		</div>
	)
}

export default Reserved