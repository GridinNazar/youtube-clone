import {Stack} from "@mui/material";
import { categories } from "../utils/constants.tsx";

interface ISidebarProps {
	selectedCategory: string,
	setSelectedCategory: (selectedCategory: string) => void,
}

export const Sidebar = ({ selectedCategory, setSelectedCategory}: ISidebarProps) => {
	return (
			<Stack direction="row" sx={{ overflowY: 'auto', height: {sx: "auto", md: "95%"}, flexDirection: {md: 'column'}}}>
				{categories.map((category) => (
					<button
							className='category-btn'
							onClick={() => setSelectedCategory(category.name)}
							style={{
								backgroundColor: category.name === selectedCategory ? "#FC1503" : undefined,
								color: '#fff'
							}}
							key={category.name}
					>
						<span style={{
							color: category.name === selectedCategory ? "#fff" : "#FC1503",
							marginRight: '15px'
						}}>
							{category.icon}
						</span>
						<span style={{
							opacity: category.name === selectedCategory ? 1 : 0.8
						}}>
							{category.name}
						</span>
					</button>
				))}
			</Stack>
	)
}