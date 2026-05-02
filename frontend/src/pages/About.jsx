import { useEffect } from 'react';
import { Box, Container, Typography, Paper, Avatar, Stack } from '@mui/material';

export default function About() {
    useEffect(() => {
        document.title = 'About Page | Nicholas A. Ball Ulmer';
    }, []);
	return (
		<Container maxWidth="md" sx={{ py: 6 }}>
			<Paper
				elevation={0}
				sx={{
					p: 4,
					borderRadius: 2,
					backgroundColor: '#ffffff',
				}}
			>
				<Stack spacing={4} alignItems="center">

					{/* Profile Image Section */}
					<Avatar
						sx={{
							width: 140,
							height: 140,
							bgcolor: '#757575',
							fontSize: 40,
						}}
					>
						IMG
					</Avatar>

					{/* Name / Header */}
					<Box textAlign="center">
						<Typography variant="h4" fontWeight={600}>
							Nicholas A. Ball Ulmer
						</Typography>

						<Typography variant="subtitle1" color="text.secondary">
							Full-Stack Developer • Game Developer • Systems Builder
						</Typography>
					</Box>

					{/* Body Content */}
					<Box sx={{ width: '100%' }}>
						<Typography variant="body1" paragraph>
							I am a software developer focused on building systems across
							full-stack web development and game development. I enjoy working
							on structured systems, interactive applications, and exploring
							the intersection between computation and creative expression.
						</Typography>
                        <br />

						<Typography variant="body1" paragraph>
							My current stack centers around React, Material UI, and
							Java Spring Boot for backend systems. I am also actively
							developing game projects in Unity and GMS2.
						</Typography>
                        <br />

						<Typography variant="body1" paragraph>
							This site serves as a portfolio of my technical work, personal
							explorations, and ongoing projects.
						</Typography>
					</Box>

					{/* Skills Section */}
					<Box sx={{ width: '100%' }}>
						<Typography variant="h6" gutterBottom>
							Core Interests
						</Typography>

						<Typography variant="body2" color="text.secondary">
							• Full-stack web applications like this one (React + backend systems)
							<br />
							• Software architecture and tooling
							<br />
							• AI / computational systems (exploratory)
							<br />
							• Game development (systems, mechanics, design)
						</Typography>
					</Box>

				</Stack>
			</Paper>
		</Container>
	);
}
