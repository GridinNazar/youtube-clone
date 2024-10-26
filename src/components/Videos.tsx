import { IItem } from './Feed';
import {Box, Stack} from "@mui/material";
import { VideoCard, ChannelCard } from "./";

interface IVideosProps {
	videos: IItem[];
	direction?: 'column';
}

export const Videos = ({ videos, direction }: IVideosProps) => {
	if (!videos?.length) return 'Loading...'

	return (
			<Stack direction={direction || "row"} sx={{ justifyContent: {xs:'center', sm:'start'} }} flexWrap="wrap" gap={2}>
				{videos.map((item, ind) =>
						<Box key={ind} sx={{width: { xs: '100%', sm: '300px', md: '320px'} }}>
							{item.id.videoId && <VideoCard video={item}/>}
							{item.id.channelId && <ChannelCard channel={item}/>}
						</Box>)}
			</Stack>
	)
}