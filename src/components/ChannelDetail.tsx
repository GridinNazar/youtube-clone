import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchFromAPI} from "../utils/fetchFromAPI.tsx";
import {Box} from "@mui/material";
import {ChannelCard} from "./ChannelCard.tsx";
import {IItem} from "./Feed.tsx";
import {Videos} from "./Videos.tsx";

export const ChannelDetail = () => {
	const { id } = useParams();
	const [channelDetail, setChannelDetail] = useState<IItem>()
	const [videos, setVideos] = useState<IItem[]>([])

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data?.items[0]))
	}, [id])

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(data => setVideos(data?.items))
	}, [id])


	return(
			<Box minHeight='95vh'>
				<Box>
					<div style={{
						background: 'linear-gradient(90deg, rgba(255,0,48,1) 0%, rgba(181,0,212,1) 49%, rgba(81,0,255,1) 100%)',
						height: '300px',
						zIndex: '10',
					}}/>

					{channelDetail && <ChannelCard channel={channelDetail} marginTop='-110px'/>}
				</Box>
				<Box display='flex' p={2}>
					<Box sx={{mr: { sm: '100px' }}} />
					<Videos videos={videos} />
				</Box>
			</Box>
	)
}