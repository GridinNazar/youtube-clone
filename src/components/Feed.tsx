import {Box, Stack, Typography} from "@mui/material";

import { Sidebar, Videos } from "./";
import {useEffect, useState} from "react";
import {fetchFromAPI} from "../utils/fetchFromAPI.tsx";

export interface IItem {
	kind: string,
	id: {
		kind: string;
		videoId?: string;
		channelId?: string;
	},
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;};
			high: {
				url: string;
				width: number;
				height: number;};
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
	statistics?: {
		subscriberCount: number;
		viewCount: number;
		likeCount: number;
	};
}

export const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>('New')
	const [videos, setVideos] = useState<IItem[]>()

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}}`).then(data => setVideos(data.items))
	}, [selectedCategory])

	return(
			<Stack sx={{ flexDirection: {sx: 'column', md: 'row'}}}>
				<Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
					<Sidebar
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
					<Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
						Copyright 2024, Russian Federation
					</Typography>
				</Box>
				<Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
					<Typography variant='h4' fontWeight='bold' sx={{mb: 2, color: '#fff'}}>
						{selectedCategory} <span style={{
							color: '#fc1503'
						}}>videos</span>
					</Typography>
					{videos ? <Videos videos={videos}/> : 'Error'}
				</Box>
			</Stack>
	)
}