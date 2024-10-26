import {IconButton, Paper} from "@mui/material";
import {Search} from "@mui/icons-material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		navigate(`/search/${searchTerm}`)
		setSearchTerm("");
	}
	return(
			<Paper
					component='form'
					onSubmit={handleSubmit}
					sx={{
						borderRadius: 20,
						border: '1px solid #e3e3e3',
						pl: 2,
						boxShadow: 'none',
						mr: {sm: 5}
					}}
			>
				<input
						type="text"
						placeholder='Search...'
						className='search-bar'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<IconButton type='submit' sx={{color: 'red', p: '10px'}}>
					<Search />
				</IconButton>

			</Paper>
	)
}