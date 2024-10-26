import {Box, Stack, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IItem} from "./Feed.tsx";
import {fetchFromAPI} from "../utils/fetchFromAPI.tsx";
import ReactPlayer from "react-player";
import {CheckCircle} from "@mui/icons-material";
import {Videos} from "./Videos.tsx";

export const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState<IItem | null>(null);
	const [videos, setVideos] = useState<IItem[]>([]);
	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data => setVideoDetail(data?.items[0]));

		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(data => setVideos(data?.items));
	}, [id])

	if (!videoDetail) return 'Loading...';

	const { snippet: { title, channelTitle, channelId }, statistics: { viewCount, likeCount } } = videoDetail;

	return(
			<Box minHeight='95vh'>
				<Stack direction={{ 'xs': 'column', 'md': 'row' }}>
					<Box flex={ 1 }>
						<Box sx={{ position: 'sticky', width: '100%', top: '86px' }}>
							<ReactPlayer url={`www.youtube.com/watch?v=${id}`} className="react-player" controls/>
							<Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
								{title}
							</Typography>
							<Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
								<Link to={`/channel/${channelId}`}>
									<Typography variant='subtitle1' color='#fff'>
										{channelTitle}
										<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}/>
									</Typography>
								</Link>
								<Stack direction='row' gap='20px' alignItems='center'>
									 <Typography variant='body1' sx={{opacity: 0.7}}>
										 {parseInt(viewCount).toLocaleString()} views
									 </Typography>
									<Typography variant='body1' sx={{opacity: 0.7}}>
										{parseInt(likeCount).toLocaleString()} likes
									</Typography>
								</Stack>
							</Stack>
						</Box>
					</Box>
					<Box px={2} py={{md: 1, sx: 5}} justifyContent='center' alignItems='center'>
						<Videos videos={videos} direction='column'/>
					</Box>
				</Stack>
			</Box>
	)
}