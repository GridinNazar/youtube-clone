import {Box, Typography} from "@mui/material";

import { Videos } from "./";
import {useEffect, useState} from "react";
import {fetchFromAPI} from "../utils/fetchFromAPI.tsx";
import {IItem} from "./Feed.tsx";
import {useParams} from "react-router-dom";

export const SearchFeed = () => {
	const [videos, setVideos] = useState<IItem[]>()
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => setVideos(data.items))
	}, [searchTerm])

	return(
			<Box p={2 } sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
				<Typography variant='h4' fontWeight='bold' sx={{mb: 2, color: '#fff'}}>
					Search results for:  <span style={{
					color: '#fc1503'
				}}>{searchTerm}</span> videos
				</Typography>
				{videos ? <Videos videos={videos}/> : 'Error'}
			</Box>
	)
}