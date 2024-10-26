import {IItem} from "./Feed.tsx";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {demoChannelTitle, demoChannelUrl, demoVideoPicture, demoVideoTitle, demoVideoUrl} from "../utils/constants.tsx";
import {CheckCircle} from "@mui/icons-material";

interface IVideoCardProps {
	video: IItem;
}

export function VideoCard({ video: { id: { videoId, channelId }, snippet } }: IVideoCardProps) {
	return (
			<Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0}}>
				<Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
					<CardMedia
							image={snippet?.thumbnails?.high?.url || demoVideoPicture}
							sx={{ width: '100%', height: 180 }}
							component="img"
					/>
					<CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>

						<Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
							<Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
								{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
							</Typography>
						</Link>

						<Link to={channelId ? `/video/${channelId}` : `/video/${demoChannelUrl}`}>
							<Typography variant='subtitle2' fontWeight='bold' color='gray'>
								{snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
								<CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}/>
							</Typography>
						</Link>

					</CardContent>
				</Link>
			</Card>
	)
}