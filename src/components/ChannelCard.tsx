import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {IItem} from "./Feed.tsx";
import {demoProfilePicture} from "../utils/constants.tsx";
import {CheckCircle} from "@mui/icons-material";

interface IChannelCardProps {
	channel: IItem;
	marginTop?: string;
}

export function ChannelCard({ channel, marginTop }: IChannelCardProps) {
	return (
			<Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { md: '320px', xs: '356px' }, height: '326px', margin: 'auto', marginTop }}>
				<Link to={`channel/${channel?.id?.channelId}`}>
					<CardContent sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#fff' }}>
						<CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
						           sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
						<Typography variant='h6' fontWeight='bold' color='#fff'>
							{channel?.snippet?.title}
							<CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}/>
						</Typography>
						{channel?.statistics?.subscriberCount &&
						<Typography>
							{parseInt(channel?.statistics?.subscriberCount.toLocaleString())} Subscribers
						</Typography>}
					</CardContent>
				</Link>
			</Box>
	)
}